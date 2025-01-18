import { useEffect, useState } from "react";

interface AppMetadata {
  name: string;
  developer: string;
  icon: string;
  currentVersion: string;
  lastUpdated: string;
}

export default function AppMetadata() {
  const [metadata, setMetadata] = useState<AppMetadata | null>(null);

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchMetadata = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMetadata({
        name: "Twitter",
        developer: "Twitter, Inc.",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/92/a7/d3/92a7d3f4-f6c5-d6b1-4c7d-6d0b5d7a5f4e/ProductionAppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
        currentVersion: "9.39.1",
        lastUpdated: "2023-06-01",
      });
    };

    fetchMetadata();
  }, []);

  if (!metadata) return <div>Loading metadata...</div>;

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex items-center">
        <img
          src={metadata.icon || "/placeholder.svg"}
          alt={metadata.name}
          className="w-16 h-16 rounded-lg mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">{metadata.name}</h2>
          <p className="text-gray-600">{metadata.developer}</p>
          <p className="text-sm text-gray-500">
            Version {metadata.currentVersion}
          </p>
          <p className="text-sm text-gray-500">
            Last updated: {metadata.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}
