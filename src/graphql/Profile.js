export const GET_USER = `
    {
        getMe {
            _id
            status
            phone
            email
            firstname
            lastname
            gender
            school
            size
            birthday
            food_restrictions
            year_of_graduation
            resume
            year_of_study
            ethnicity
            bio
            links {
                github
                linkedin
                devpost
                other
            }
        }
    }
`;

export const UPDATE_USER = `
    mutation updateUser($user: UserInput!) {
        updateMe(user: $user) {
            _id
        }
    }
`;
