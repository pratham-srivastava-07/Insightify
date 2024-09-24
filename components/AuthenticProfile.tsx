import { authOptions } from "@/app/utils/auth"
import { getServerSession } from "next-auth"

export default async function AuthenticProfile() {
    const session = await getServerSession(authOptions);
    return <div>
        {/* {JSON.stringify(session)} */}
    </div>
}