import { Award, FileText, Star, ExternalLink } from "lucide-react";

const featuredItems = [
  {
    type: "certificate",
    title: "Cloud Computing",
    description:
      "Ranked in the top 2% of Cloud Computing course at IIT Kharagpur",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
    link: "https://drive.google.com/file/d/1d-cVtDANB9cAAOFcu-R0M9Ja8PWKPGKQ/view?usp=sharing",
  },
  {
    type: "research",
    title:
      "Enhancing Network Performance through AI-Based Traffic Optimization Techniques",
    description: "Paper has been published officially in IEEE Xplore",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    link: "https://ieeexplore.ieee.org/document/10961444",
  },
  {
    type: "achievement",
    title: "Hackmatrix Top 1",
    description:
      "My team have been shortlisted as top 1 team from all over India, organized by IIT Patna",
    icon: Star,
    color: "from-pink-500 to-rose-500",
    link: "#",
  },
  {
    type: "achievement",
    title: "Appointed as Joint Secretary",
    description:
      "I have been appointed as the Joint Secretary for ISTE Student Chapter CU, and have organized 6+ events successfully",
    icon: Award,
    color: "from-green-500 to-teal-500",
    link: "#",
  },
  {
    type: "certificate",
    title: "AIR 126 in Coding Ninjas Premier League",
    description:
      "Secured a All India Rank of 126 in Coding Ninjas programming competions CNPL",
    icon: FileText,
    color: "from-indigo-500 to-purple-500",
    link: "#",
  },
  {
    type: "achievement",
    title: "Hack with Tricity Top 5",
    description:
      "Proud to share that out of all the talented teams that participated, we secured a spot in the Top 10! 🎖️",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
    link: "#",
  },
];

export const FeaturedSection = () => {
  return (
    <section
      id="featured"
      className="section-padding bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key achievements, certifications, and research work that showcase my
            expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer hover:cursor-zoom-in relative overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative z-10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-4 glass rounded-full bg-gradient-to-br ${item.color} bg-opacity-10`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 text-transparent bg-clip-text`}
                    >
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
