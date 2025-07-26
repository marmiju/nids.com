import { speakerData } from "@/lib/speech/speech";
import Speech from "../components/speech/Speech";

export default function MessagePage() {

    return (
        <div className="max-w-[1280px] mx-auto gap-4 grid">
            {
                speakerData && speakerData.map((speech) => (
                    <Speech key={speech.id} imageUrl={speech.imageUrl} name={speech.name} speech={speech.speech} title={speech.title} />
                ))
            }

        </div>
    )

}