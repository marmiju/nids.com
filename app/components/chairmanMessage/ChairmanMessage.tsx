import Image from "next/image";

const ChairmanMessage = () => {
  return (
    <section className="max-w-[90%] mx-auto my-12 bg-secondary shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 w-full  md:h-auto relative">
        <Image
          src="/chairmanSir.jpg"
          alt="চেয়ারম্যান স্যার"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Message Section */}
      <div className=" w-full p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          Message from the Chairman
        </h2>
        <p className="text-text text-lg leading-relaxed  ">
          Welcome to Northbengal Institute of Development Studies (NIDS)! As you browse through this brochure I hope it will assist you making a choice and entering to a center of research, training and academic excellence. You will find a helpful environment and committed researchers, trainers, teachers and staff. NIDS through our collaborative efforts with similar other stakeholders will bring continuous improvements in our programs, in our learning facilities and resources so that you receive the best learning and experience a memorable life.The underlying philosophy of NIDS is to develop productive human resources with strong morale, who will grow as individuals with applied knowledge and skills, self-confidence and devotion so that they become a citizen with a sense of leadership. Through practical and hands-on learning with co-curricular and extra-curricular activities, we try to make NIDS a true center of excellenceWe are committed to success and prosperity in personal and academic career of students and trainees. NIDS is the only private institute in Rangpur Division offering multi-dimension activities (eg, research, training and tertiary level teaching) with residential facilities without undermining quality of services. We aim to develop self-confidence, adaptability, team work and market oriented diversified skills in the youth. The strength of NIDS breeds from the unique morale and contributions of our staff and our distinctive participatory approach that culminates in people ready for this dynamic society and the ever challenging job market. I hope you will turn up with best career as demanded in the job market using our professional services and receiving quality learning by doing.
          <br />
          <span className="block mt-4 font-semibold text-gray-600">
            – Dr. Syed Samsuzzaman, Chairman,Northbengal Institute of Development Studies
          </span>
        </p>
      </div>
    </section>
  );
};

export default ChairmanMessage;
