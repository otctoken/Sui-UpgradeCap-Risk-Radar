const endpoint = "https://graphql.mainnet.sui.io/graphql";

export async function getObjectData(id: any) {
    const query = `
       query Obj($id: SuiAddress!) {
      object(address: $id) {
        asMoveObject {
          contents { json }  
        }
      }
    }
  `;
    const variables = { id };
    const res = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${res.statusText}\n${text}`);
    }
    const json = await res.json();
    if (json.errors?.length) {
        throw new Error(
            "GraphQL errors!:\n" + JSON.stringify(json.errors, null, 2)
        );
    }
    const obj = json.data.object;
    if (!obj) return null;

    return obj;
}
export async function get_object_holder(objectId: any) {
    const query = `
    query GetOwner($id: SuiAddress!) {
      object(address: $id) {
        address
        owner {
          __typename
          
          ... on AddressOwner {
            address {
              address
            }
          }

          ... on ObjectOwner {
             address {
               address
             }
          }
          ... on Shared {
            initialSharedVersion
          }
          ... on Immutable {
            __typename
          }
        }
      }
    }
  `;
    const variables = { id: objectId };
    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ query, variables }),
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`HTTP ${res.status} ${res.statusText}\n${text}`);
        }
        const json = await res.json();
        if (json.errors) {
            console.error(
                "GraphQL Schema Error:",
                JSON.stringify(json.errors, null, 2)
            );
            return null;
        }
        const ownerData = json.data?.object?.owner;
        if (!ownerData) return { type: "Unknown" };
        const type = ownerData.__typename;
        if (type === "AddressOwner") {
            const addr = ownerData.address?.address;
            return { type: "Address", address: addr };
        } else if (type === "ObjectOwner") {
            const parentId = ownerData.address?.address;
            return { type: "Parent", parentId: parentId };
        } else if (type === "Shared") {
            return {
                type: "Shared",
                initial_shared_version: ownerData.initialSharedVersion,
            };
        } else if (type === "Immutable") {
            return { type: "Immutable" };
        }
        return { type: "Unknown", raw: ownerData };
    } catch (error) {
        console.error("err:", error);
        return null;
    }
}
export async function Recursively_query_the_parent_object_ID_of_the_DF(currentId: any, targetParentId: any) {
    const query = `
    query GetParent($id: SuiAddress!) {
      object(address: $id) {
        address
        owner {
          __typename
          ... on ObjectOwner {
            address {
              address 
            }
          }
          ... on AddressOwner {
            address {
               address
            }
          }
          ... on Shared {
            initialSharedVersion
          }
        }
      }
    }
  `;
    const variables = { id: currentId };
    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ query, variables }),
        });
        const json = await res.json();
        if (json.errors) {
            console.error("err:", json.errors);
            return false;
        }
        const ownerData = json.data?.object?.owner;

        if (!ownerData) {
            return false;
        }

        if (ownerData.__typename === "ObjectOwner") {
            const parentId = ownerData.address?.address;
            if (parentId === targetParentId) {
                return true;
            }

            else {
                return await Recursively_query_the_parent_object_ID_of_the_DF(parentId, targetParentId);
            }
        } else {
            return false;
        }
    } catch (e) {
        console.error("net err:", e);
        return false;
    }
}

export async function query_object_wraps_object_ID(json: any, targetId: any) {
    if (!json) return false;
    if (typeof json === "string") {
        return json === targetId;
    }
    for (const key in json) {
        if (query_object_wraps_object_ID(json[key], targetId)) {
            return true;
        }
    }
    return false;
};
// const objectId =
//     "0x84d368e8587160c443680e792e8b5b337b5a78e756fbe6885ce4df9a4f682f10";
// const aaa = await getObjectData(objectId);

// const bbb = await get_object_holder(objectId);


// const ccc = await getObjectData(
//     "0x234c9ffca44613ab87a2711325b6e17bad9ece0449b917c8bd9c0ad7a0506cc2"
// );
// const ddd = query_object_wraps_object_ID(
//     ccc,
//     "0x46ab0ab5a03c537f7af7bf350b2229292d1719ff43fbcaecdfdd9eaf4c0bf9fa"
// );

// console.log(ddd);


// const sss = await Recursively_query_the_parent_object_ID_of_the_DF(
//     "0x029cfc7858018b62fad32a68d50ccc85a01b1d510b041dd9e2affdc63103e015",
//     "0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8"
// );
// console.log("999", sss);
