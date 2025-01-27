import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { storage } from './storage/resource';

defineBackend({
  auth,
  data,
  storage
});

// import { defineBackend } from "@aws-amplify/backend";
// import { auth } from "./auth/resource";
// import { storage } from "./storage/resource";
// import * as iam from "aws-cdk-lib/aws-iam";

// /**
//  * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
//  */
// const backend = defineBackend({
//   auth,
//   storage,
// });

// const customBucketName = "stobro-custom-bucket-1";

// backend.addOutput({
//   storage: {
//     buckets: [
//       {
//         name: customBucketName,
//         bucket_name: customBucketName,
//         aws_region: "us-east-2",
//         paths: {
//           "public/*": {
//             guest: ["get", "list", "write", "delete"],
//             authenticated: ["get", "list", "write", "delete"],
//           },
//         },
//       },
//     ],
//   },
// });

// // Define an inline policy for Amplify's un-auth role to access our custom bucket
// const unauthPolicy = new iam.Policy(backend.stack, "customBucketPolicy", {
//   statements: [
//     new iam.PolicyStatement({
//       effect: iam.Effect.ALLOW,
//       actions: ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
//       resources: [`arn:aws:s3:::${customBucketName}/public/*`],
//     }),
//     new iam.PolicyStatement({
//       effect: iam.Effect.ALLOW,
//       actions: ["s3:ListBucket"],
//       resources: [`arn:aws:s3:::${customBucketName}`],
//       conditions: {
//         StringLike: {
//           "s3:prefix": ["public/*", "public/"],
//         },
//       },
//     }),
//   ],
// });

// // Add the policies to the unauthenticated user role
// backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
//   unauthPolicy
// );
