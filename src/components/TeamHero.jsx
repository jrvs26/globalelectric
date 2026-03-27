import React from "react";
import ceo from "../assets/ceo.jpg"
import vice from "../assets/vice.jpg"
import cajayon from "../assets/engineering/cajayon.jpg"
import kyleTobias from "../assets/engineering/kyletobias.jpg"
import mervin from "../assets/engineering/mervinYaun.jpg"
import maryMay from "../assets/engineering/maryMay.jpg"
import manuelLauden from "../assets/engineering/manuelLauden.jpg"

const leadership = [
  {
    name: "Engr. Jojo Tobias",
    role: "President",
    image: ceo,
  },
  {
    name: "Mr. Edgar Garcia",
    role: "Vice President",
    image: vice,
  },
];

const departments = [
  {
    name: "Engineering Team",
    members: [
      {
        name: "Mervin Yaun",
        role: "Electrical Engineer",
        image: mervin,
      },
      {
        name: "Jan Kyle Tobias",
        role: "Software Developer",
        image: kyleTobias,
      },
      {
        name: "Richard Cajayon",
        role: "Web Designer",
        image: cajayon,
      },
      {
        name: "Lauden Manuel",
        role: "UI Designer",
        image: manuelLauden,
      },
      {
        name: "Mary May Lizarondo",
        role: "Web Designer",
        image: maryMay,
      }
    ],
  },
  // {
  //   name: "Design Team",
  //   members: [
  //     {
  //       name: "Simon Konecki",
  //       role: "Web Designer",
  //       image: "https://readymadeui.com/team-3.webp",
  //     },
  //     {
  //       name: "Eleanor",
  //       role: "UI Designer",
  //       image: "https://readymadeui.com/team-6.webp",
  //     },
  //     {
  //       name: "Simon Konecki",
  //       role: "Web Designer",
  //       image: "https://readymadeui.com/team-3.webp",
  //     },
  //     {
  //       name: "Eleanor",
  //       role: "UI Designer",
  //       image: "https://readymadeui.com/team-6.webp",
  //     },
  //   ],
  // },
];

const TeamHero = () => {
  return (
    <div className="p-4">
      
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-bold">
          Meet our team
        </h2>
        <p className="text-slate-600 text-[15px] mt-4 leading-relaxed">
          Meet our team of professionals to serve you.
        </p>
      </div>

      {/* Leadership */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-10">
          Leadership
        </h3>

        <div className="flex flex-wrap justify-center gap-16">
          {leadership.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-50 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="py-4">
                <h4 className="text-slate-900 text-lg font-semibold">
                  {member.name}
                </h4>
                <p className="text-slate-600 text-sm mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div className="mt-20 space-y-16 max-w-6xl mx-auto">
        {departments.map((dept, index) => (
          <div key={index}>

            <h3 className="text-xl font-semibold text-slate-800 mb-10 text-center">
              {dept.name}
            </h3>

            <div className="flex flex-wrap justify-center gap-10">
              {dept.members.map((member, i) => (
                <div key={i} className="text-center w-32">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-50 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="py-4">
                    <h4 className="text-slate-900 text-base font-semibold">
                      {member.name}
                    </h4>
                    <p className="text-slate-600 text-[13px] mt-1.5">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TeamHero;