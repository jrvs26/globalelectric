import React from "react";
import { ceo, vice, cajayon, kyleTobias, mervin, maryMay, manuelLauden, jez, gio, obet, riz, ped, wilson, roegine, danilo, jm, karen, kath, kim, toinette, rhoda, rose, danica, danielle, gilbert, redentor, raquel, edlene, angeline, mike, ricky} from "../assets/asset.js"



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
    name: "HR & Administrative Team",
    members: [
      {
        name: "Raquel Pascual",
        role: "Administrative Head",
        image: raquel,
      },
      {
        name: "Edlene Joy Garcia",
        role: "HR Head/ Vendor Coordinator",
        image: edlene,
      },
      {
        name: "Angeline Mateo",
        role: "Payroll Staff",
        image: angeline,
      },
      {
        name: "Marcelino Alday",
        role: "Liason Officer",
        image: mike,
      },
    ],
  },
  {
    name: "Finance and Accounting Team",
    members: [
      {
        name: "Rhodora Tobias",
        role: "Finance Head",
        image: rhoda,
      },
      {
        name: "Mary Rose Borbe",
        role: "Procurement Manager",
        image: rose,
      },
      {
        name: "Danica Garcia",
        role: "Assistant Purchaser",
        image: danica,
      },  
      {
        name: "Danielle Saena Mateo",
        role: "Marketing Representative",
        image: danielle,
      },
      {
        name: "Danilo Santiago",
        role: "Accountant",
        image: danilo,
      },
      {
        name: "Kathleen Garcia",
        role: "Accounting Staff",
        image: kath,
      },
      {
        name: "Karen Joy Paular",
        role: "Book Keeper",
        image: karen,
      },
      {
        name: "Kim Mirate Paular",
        role: "Assistant Book keeper",
        image: kim,
      },
      {
        name: "Toinette Delos Angeles",
        role: "Data Encoder",
        image: toinette,
      },
      {
        name: "John Michael Del Rosario",
        role: "Data Encoder",
        image: jm,
      },
      {
        name: "Engelbert Lazaro",
        role: "Warehouse Head",
        image: gilbert,
      },
      {
        name: "Redentor Tuazon",
        role: "Warehouse Clerk",
        image: redentor,
      },

    ],
  },
  {
    name: "Engineering Team",
    members: [
       {
        name: "Richard Garcia",
        role: "Design Manager",
        image: ricky,
      },
      {
        name: "Mervin Yaun",
        role: "Senior Electrical Engineer",
        image: mervin,
      },
      {
        name: "Jan Kyle Tobias",
        role: "Design Mechanical Engineer",
        image: kyleTobias,
      },
      {
        name: "Richard Cajayon",
        role: "Design Manager",
        image: cajayon,
      },
      {
        name: "Lauden Manuel",
        role: "Project Manager",
        image: manuelLauden,
      },
      {
        name: "Mary May Lizarondo",
        role: "CAD Operator",
        image: maryMay,
      }
    ],
  },
  {
    name: "Meralco Team",
    members: [
      {
        name: "Mark Jason Ped",
        role: "Budget Controller",
        image: ped,
      },
      {
        name: "Jezriel Arellano",
        role: "Vendor Coordinator",
        image: jez,
      },
      {
        name: "Roegine Tobias",
        role: "Vendor Q/A",
        image: roegine,
      },
      {
        name: "Roberto Tobias",
        role: "Vendor Coordinator",
        image: obet,
      },
      {
        name: "Gio Bryan Malinao",
        role: "Safety Officer",
        image: gio,
      },
      {
        name: "Wilson Delos Reyes",
        role: "Warehouse Clerk",
        image: wilson,
      },
       {
        name: "Riz Margarejo",
        role: "Materials Man",
        image: riz,
      },
    ],
  },
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