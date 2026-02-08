# Chapter 9: Motion Planning and Control

Seeing is not enough; a robot must move safely and efficiently. This week covers how robots plan their paths and control their motors.

## Learning Outcomes

By the end of this chapter, you will be able to:
- Understand the difference between Path Planning and Motion Control.
- Learn about the MoveIt 2 framework for manipulation.
- Understand the Nav2 stack for autonomous navigation.
- Learn about PID and MPC control algorithms.

---

## 9.1 Path Planning vs. Motion Control

- **Path Planning**: Finding a collision-free route from Point A to Point B. (The "Map" level).
- **Motion Control**: Translating that path into actual motor commands while adjusting for disturbances like wind or bumps. (The "Muscle" level).

---

## 9.2 Navigation with Nav2

Nav2 is the standard navigation stack for ROS 2. It includes:
- **Costmaps**: Maps that mark "Expensive" (dangerous) and "Cheap" (safe) areas to walk.
- **Planners**: Algorithms (like A*) that find the shortest path.
- **Controllers**: Algorithms (like DWB) that follow the path while avoiding moving obstacles.

---

## 9.3 Manipulation with MoveIt 2

For humanoid arms, we use **MoveIt 2**. MoveIt handles:
- **Kinematics**: Calculating joint angles for a desired hand position.
- **Collision Checking**: Ensuring the arm doesn't hit the robot's own body.
- **Grasp Planning**: Finding the best way to hold an object.

---

## 9.4 Control Algorithms

1. **PID (Proportional-Integral-Derivative)**: A simple feedback loop to keep a motor at a target position.
2. **MPC (Model Predictive Control)**: A more advanced algorithm that "looks ahead" into the future to make better decisions (essential for humanoid balance).

---

## Assessment: Week 9 Task

**Goal**: Explore Navigation concepts.

1. Research the "A* Algorithm" and explain how it finds the shortest path.
2. What is a "Costmap" in ROS 2 navigation?
3. In a humanoid robot, why is "Self-Collision" checking important when moving the arms?

---

## Discussion

Compare a "Global Planner" and a "Local Planner" in the context of a robot walking through a crowded cafe.
