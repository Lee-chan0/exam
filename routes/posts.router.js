// routes/posts.router.js
import express from "express";
import {createNewPost, getAllPosts, updatePost, deletePostById} from "../models/posts.js";

const router = express.Router();

router.post("/api/posts", async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await createNewPost({ title, content });
        res.status(201).json({ post: newPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "서버에러" });
    }
});

router.get("/api/posts", async (req, res) => {
    try {
        const allPosts = await getAllPosts();
        res.status(200).json({ posts: allPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "서버에러" });
    }
});

router.put("/api/posts/:postId", async (req, res) => {
    try {
        const { title, content } = req.body;
        const { postId } = req.params;
        const updatedPost = await updatePost(postId, { title, content });
        res.status(200).json({ post: updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "서버에러" });
    }
});

router.delete("/api/posts/:postId", async (req, res) => {
    try {
        const { postId } = req.params;
        await deletePostById(postId);
        res.status(200).json({message : "success"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "서버에러" });
    }
});

export default router;
