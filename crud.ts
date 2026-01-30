import { prisma } from "./lib/prisma";

async function run(){
    // const createUser = await prisma.user.create({
    //     data:{
    //         name: "Dev Roy",
    //         email: "dev@gmail.com"
    //     }
    // })
    // console.log(createUser);

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio: "Web Developer",
    //         dateOfBirth: new Date("1991-06-11"),
    //         userId: 1
            
    //     }
    // })
    // console.log('Profile Created', createProfile)

    // create post for user id = 1 

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is a Title",
    //         content: "This content related to Web Development",
    //         authorId: 1
    //     }
    // })
    // console.log('Post Created', createPost);

    // retrieve all data

    // const users = await prisma.user.findMany({
    //     // include:{
    //     //     posts: true,
    //     //     profile: true
    //     // }
    //     select:{
    //         id: true,
    //         name: true,
    //         email: true,
    //         posts: true,
    //         profile: true
    //     }
    // }
    // );

    // console.dir(users,{depth: Infinity});

    const updateUser = await prisma.profile.update({
        where:{
            userId: 1
        },
        data:{
            bio: "Web Developer & Project Executive",
            dateOfBirth: new Date("1991-10-30")
        },
        select:{
            id: true,
            bio: true,
            user: {
                select:{
                    name: true,
                    email: true
                }
            }
        }
    })

    console.log(updateUser)
}

run();