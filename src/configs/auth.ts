import { AuthOptions, User } from "next-auth";
import { AuthUserProps } from "@/types/authUsers";
import Credentials from "next-auth/providers/credentials";

const usersArr: AuthUserProps[] = [
    {email: 'user@user.com', password: '12345'},
    {email: 'admin@admin.com', password: '67890'}
]

export const AuthConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {label: 'Email', type: 'email', required: true},
                password: {label: 'Пароль', type: 'password', required: true},
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password) return null;

                let currentUser = usersArr.find(user=> user.email === credentials.email)!;
            
                if(currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithputPass} = currentUser;

                    return userWithputPass as User;

                }

                return null
            }
        })
    ]
} 