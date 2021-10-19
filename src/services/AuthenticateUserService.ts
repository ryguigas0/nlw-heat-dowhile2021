// Recieve code
// Recover github access token

import axios from "axios"

// Is user in DB?
// Yes -> gen token
// No -> gen db and token

// Return token + user info


class AuthenticateUserService {
    async execute(code: string) {
        const url = `https://github.com/login/oauth/access_token`

        const resp = await axios.post(url, null,
            {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    code,
                },
                headers: {
                    "Accept": "application/json"
                }
            }
        )
        
        return resp.data
    }
}

export { AuthenticateUserService }