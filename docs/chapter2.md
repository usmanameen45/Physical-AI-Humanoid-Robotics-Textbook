# Chapter 2: Foundations of Robot Operating System (ROS 2)

This week, we dive into the industry standard for robot software development: ROS 2 (Robot Operating System).

## Learning Outcomes

By the end of this chapter, you will be able to:
- Explain the architecture and core concepts of ROS 2.
- Install and configure a ROS 2 environment (Humble or Jazzy).
- Create and manage ROS 2 Nodes, Topics, and Services.
- Use Command Line Interface (CLI) tools to debug robotic systems.

---

## 2.1 Why ROS 2?

ROS 2 is not an operating system in the traditional sense (like Windows or Linux), but a "middleware" or framework that provides a collection of tools, libraries, and conventions that simplify the task of creating complex and robust robot behavior.

### Key Advantages:
- **Distributed Computing**: Different parts of the robot's brain can run on different computers.
- **Modularity**: Easily swap out a navigation algorithm for a better one.
- **Community Support**: Thousands of ready-to-use packages for vision, mapping, and control.

---

## 2.2 Core Concepts

Understanding ROS 2 requires mastering four main pillars:

1. **Nodes**: A node is a process that performs computation. A humanoid might have one node for its camera, another for its legs, and another for its path planning.
2. **Topics**: Nodes communicate by publishing and subscribing to topics. This is an asynchronous "broadcast" system.
3. **Services**: For synchronous "request-response" interactions (e.g., asking a robot to "Take a Picture").
4. **Actions**: For long-running tasks that provide feedback (e.g., "Navigate to the Kitchen").

---

## 2.3 The ROS 2 Workspace

A typical ROS 2 project is organized into a **Workspace**.

```bash
mkdir -p ~/robot_ws/src
cd ~/robot_ws
colcon build
source install/setup.bash
```

- **src/**: Where your source code lives.
- **build/**: Intermediate files generated during compilation.
- **install/**: Where the final executables and libraries are placed.

---

## 2.4 Useful CLI Tools

- `ros2 node list`: See all running nodes.
- `ros2 topic echo /topic_name`: See data flowing through a topic.
- `ros2 interface show <msg_type>`: Inspect the structure of a message.
- `ros2 launch <package> <launch_file>`: Start multiple nodes at once.

---

## Assessment: Week 2 Lab

**Goal**: Create a simple ROS 2 system with a "Talker" and a "Listener".

1. Create a new package named `my_first_pkg`.
2. Implement a Python node that publishes a "Hello Humanoid" message to a topic called `/chatter`.
3. Implement a second node that subscribes to `/chatter` and prints the received message.
4. Use `ros2 topic list` and `ros2 topic hz` to verify the communication.

---

## Learning Reflection

Describe a scenario in a humanoid robot where a **Service** would be more appropriate than a **Topic**.