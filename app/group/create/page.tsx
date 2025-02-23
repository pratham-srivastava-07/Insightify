// import GroupInfo from "@/actions/groups";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { User } from "lucide-react";
// import { getServerSession } from "next-auth"
// import { redirect } from "next/navigation";

// export default async function ({
//     searchParams,
//   }: {
//     searchParams: { [affiliate: string]: string }
//   }) { 
//     const session = await getServerSession();
    
//     const affiliate = await GroupInfo({id: searchParams.affiliate})

//     if(!session || !session.user) {
//         redirect("/signin");
//     }
//     if (!searchParams.affiliate) {
//       return <div>Affiliate parameter is missing.</div>;
//     }
//     let aff
//     try {
//       aff = await GroupInfo({ id: searchParams.affiliate });
//     } catch (error) {
//       console.error("Error fetching affiliate information:", error);
//       return <div>Failed to load affiliate information.</div>;
//     }
  
//     // Check if the affiliate response is valid
//     if (!affiliate || affiliate.status !== 200) {
//       return <div>Affiliate information is not available.</div>;
//     }

//     return <div>
//          <>
//       <div className="px-7 flex flex-col">
//         <h5 className="font-bold text-base text-themeTextWhite">
//           Payment Method
//         </h5>
//         <p className="text-themeTextGray leading-tight">
//           Free for 14 days, then $99/month. Cancel anytime.All features.
//           Unlimited everything. No hidden fees.
//         </p>
//         {affiliate.status === 200 && (
//           <div className="w-full mt-5 flex justify-center items-center gap-x-2 italic text-themeTextGray text-sm">
//             You were referred by
//             <Avatar>
//               <AvatarImage
//                 src={session.user.image as string}
//                 alt="User"
//               />
//               <AvatarFallback>
//                 <User />
//               </AvatarFallback>
//             </Avatar>
//             {session.user.name}
//             {session.user.email}
//           </div>
//         )}
//       </div>
//       {/* <CreateGroup
//         userId={user.id}
//         affiliate={affiliate.status === 200 ? true : false}
//         stripeId={affiliate.user?.Group?.User.stripeId || ""}
//       /> */}
//     </>
//     </div>
//   }

export default async function GroupPage() {
  return <div>
    hello
  </div>
}