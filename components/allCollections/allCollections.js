import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Collections({ collections }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(collections || []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://ebraw-server-5d3f.onrender.com/all-collections");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to load collections", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {loading &&
        data.map((i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-80 w-full" />
        ))}

      {!loading &&
        data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative bg-gray-100 p-6 flex items-center justify-between"
          >
            <div className="w-1/2">
              <Image
                alt={item.title.type}
                width={500}
                height={600}
                className="object-cover "
              />
            </div>
            <div className="w-1/2 flex flex-col items-start pl-4">
              <p className="text-sm text-gray-500">{item.description}</p>
              <h2 className="text-2xl font-semibold mt-1">{item.slug}</h2>
              <a
                href={item.link}
                className="mt-4 bg-blue-900 text-white px-5 py-2 hover:bg-blue-800 transition"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://yourdomain.com/api/getCollections");
  const collections = await res.json();

  return {
    props: { collections },
    revalidate: 60,
  };
}
