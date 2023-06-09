import type { PageServerLoad } from "./$types";
import { client } from "../../vendors/utils";

export const load: PageServerLoad = async () => {
  const query = `
    query story {
        story {
            title
            createdBy {
                 name
            }
           content {
                html
            }
        }
    }
}`;
  const data = await client({ query, fetch: fetch });

  return { story: data.story,};

};

// import type { PageServerLoad } from './$types';
// import { client } from "../../vendors/utils/utils";
// export const load: PageServerLoad = async ({ params }) => {
// 	const query = `
//     query Story($id: ID) {
//         story(where: {id: $id}) {
//             title
//             createdBy {
//                 name
//             }
//             content {
//                 html
//             }
//         }
//     }`;
// 	const data = await client({ query, variables: { id: params }, fetch: fetch });

// 	return { ...data.story };
// };
