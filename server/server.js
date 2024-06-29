import app from "./app.js";
import { User } from "./models/userSchema.js";
import http from 'http';
import { Server } from 'socket.io'; 

// Initialize Socket.io
const server = http.createServer(app);
const io = new Server(server); // Initialize Socket.io with HTTP server instance

io.on('connection', (socket) => {
    console.log('New client connected: ' + socket.id);

    // Handle user online status
    socket.on('userOnline', async (userId) => {
        try {
            const user = await User.findById(userId);
            if (user) {
                user.online = true;
                await user.save();
                io.emit('updateUserStatus', { userId, online: true });
            }
        } catch (error) {
            console.error('Error updating online status:', error);
        }
    });

    // Handle user offline status
    socket.on('disconnect', async () => {
        try {
            const user = await User.findOneAndUpdate(
                { socketId: socket.id },
                { $set: { online: false } },
                { new: true }
            );
            if (user) {
                io.emit('updateUserStatus', { userId: user._id, online: false });
            }
        } catch (error) {
            console.error('Error updating offline status:', error);
        }
    });
});

// Start the server
const port = 4000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});