import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createNewPost = async ({ title, content }) => {
    return prisma.posts.create({
        data: {
            title,
            content,
        },
    });
};

const getAllPosts = async () => {
    return prisma.posts.findMany({
        select : {
            postId : true,
            title : true,
            content : true
        }
    });
};

const updatePost = async (postId, { title, content }) => {
    return prisma.posts.update({
        where: {
            postId : +postId,
        },
        data: {
            title,
            content,
        },
    });
};

const deletePostById = async (postId) => {
    return prisma.posts.delete({
        where: {
            postId : +postId
        },
    });
};

export { createNewPost, getAllPosts, updatePost, deletePostById };
