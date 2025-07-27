import { speakerData } from "@/lib/speech/speech";
import Speech from "../components/speech/Speech";

export default function MessagePage() {

    return (
        <div className="max-w-[1280px] mx-auto my-10 gap-4 grid p-4">
            {
                speakerData && speakerData.map((speech) => (
                    <Speech key={speech.id} imageUrl={speech.imageUrl.src} name={speech.name} speech={speech.speech} title={speech.title} />
                ))
            }

        </div>
    )

}