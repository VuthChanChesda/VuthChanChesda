// api/stats.js

const fetch = require('node-fetch');

export default async function handler(req, res) {
    const username = 'VuthChanChesda'; // Replace with your GitHub username
    const githubToken = process.env.GITHUB_TOKEN; // Use the token from Vercel's environment variables

    try {
        const response = await fetch(
            `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&token=${githubToken}`,
            {
                headers: {
                    'Authorization': `token ${githubToken}`, // Using the GitHub token for authentication
                },
            }
        );
        const data = await response.text(); // Read the response as text (as it's an image URL)

        res.status(200).send(data); // Send back the image data
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from GitHub API' });
    }
}
