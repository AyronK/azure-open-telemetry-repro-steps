import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Test app",
        short_name: "Test app",
        display: "standalone",
    };
}
