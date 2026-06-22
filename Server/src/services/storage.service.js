const { ImageKit } = require("@imagekit/nodejs")

const imageKitClient = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(file) {
    try {
        const result = await imageKitClient.files.upload({
            file,
            fileName: "turf_" + Date.now(),
            folder: "Turf/Images"
        })
        return result;
    } catch (error) {
        console.error("ImageKit Upload Error:", error);
        throw error;
    }
}

module.exports = { uploadFile }