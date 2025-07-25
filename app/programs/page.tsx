import { Loading } from "../components/loading/Loading";
import Programs from "../components/Programs/Programs";
import { AboutData } from "@/lib/about/AboutData";

export default async function page() {
    const aboutData = await AboutData()

    return (
        <div>
            {aboutData ? <Programs programs={aboutData.programs} /> : <Loading />}
        </div>

    )
}