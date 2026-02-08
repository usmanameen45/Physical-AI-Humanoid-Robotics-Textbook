# Chapter 12: Capstone Project Part 1: Design and Setup

It's time to put everything you've learned into practice. Over the next two weeks, you will design and implement a Physical AI system for a humanoid robot.

## Learning Outcomes

By the end of this chapter, you will be able to:
- Define a project scope and requirements.
- Select the appropriate software stack (ROS 2, Isaac Sim, Unity).
- Design the robot's URDF and Simulation environment.
- Create a project plan with measurable milestones.

---

## 12.1 Project Options

Choose one of the following tracks for your capstone:

### Track A: The Helpful Homebot
- **Goal**: A humanoid must navigate a kitchen, identify a "trash" object, and dispose of it.
- **Focus**: Navigation (Nav2), Perception (YOLO/Segment Anything), and High-level Reasoning (LLM).

### Track B: The Agile Athlete
- **Goal**: A humanoid must walk across a series of stepping stones or uneven terrain.
- **Focus**: Reinforcement Learning (Isaac Lab), Control (MPC), and Sim-to-Real robustness.

### Track C: The Precision Picker
- **Goal**: A humanoid must sort differently colored blocks from a moving conveyor belt.
- **Focus**: Manipulation (MoveIt 2), Perception (Pose Estimation), and Synchronized Motion.

---

## 12.2 Design Phase

1. **System Architecture**: Draw a diagram of your ROS 2 nodes and their connections.
2. **Environment Design**: Create or source a 3D environment (in USD or Unity) that matches your task.
3. **Success Metrics**: How will you know your project is successful? (e.g., "90% success rate in picking objects").

---

## 12.3 Setup and Baseline

By the end of this week, you should have:
- A working URDF of your chosen humanoid.
- A simulation environment where the robot can spawn.
- A "Baseline" script that can move the robot's joints or navigate to a point.

---

## Assessment: Capstone Proposal

Submit a 1-page PDF proposal including:
1. Chosen Track and Project Title.
2. Description of the task.
3. List of ROS 2 packages and AI models you plan to use.
4. A screenshot of your robot in its simulation environment.
