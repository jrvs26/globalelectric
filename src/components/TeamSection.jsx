import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";


const team = [
    {
        name: "John Carter",
        role: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sarah Lee",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 2, // faster stagger
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }, // faster animation
    hover: { y: -12, scale: 1.2 },
};


function TeamSection() {
    
    const [selected, setSelected] = useState(null);
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Meet Our Team
                </h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover="hover"
                            onClick={() => setSelected(member)}
                            className="cursor-pointer bg-white shadow-md border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-28 h-28 mx-auto rounded-full object-cover"
                            />

                            <h3 className="mt-6 font-semibold">{member.name}</h3>
                            <p className="text-indigo-600 text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Modal */}
                <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="bg-white rounded-2xl p-8 max-w-md w-full">
                            {selected && (
                                <>
                                    <img src={selected.image} alt={selected.name} className="w-24 h-24 rounded-full mx-auto" />
                                    <Dialog.Title className="text-xl font-bold text-center mt-4">{selected.name}</Dialog.Title>
                                    <p className="text-center text-indigo-600">{selected.role}</p>
                                    <p className="text-gray-600 mt-4 text-center">{selected.bio}</p>
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg"
                                    >
                                        Close
                                    </button>
                                </>
                            )}
                        </Dialog.Panel>
                    </div>
                </Dialog>

            </div>
        </section>
    )
}

export default TeamSection