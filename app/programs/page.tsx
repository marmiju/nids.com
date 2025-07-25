import Programs from "../components/Programs/Programs";
import { AboutData } from "@/lib/about/AboutData";
import Loading from "../loading";

export default async function page() {
    const aboutData = await AboutData()

    return (
        <div>
            {aboutData ? <Programs programs={aboutData.programs} /> : <Loading />}
        </div>

    )
}