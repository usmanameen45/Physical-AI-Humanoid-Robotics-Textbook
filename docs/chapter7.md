# Chapter 7: Building and Simulating Humanoids in Isaac Sim

This week, we get hands-on with humanoid simulation using NVIDIA's specialized tools.

## Learning Outcomes

By the end of this chapter, you will be able to:
- Import a humanoid model into Isaac Sim.
- Configure "Articulation Roots" and "Drive" parameters.
- Use the Isaac Sim Python API to control a robot.
- Understand the "Isaac Orbit" (now Isaac Lab) framework.

---

## 7.1 Humanoid Assets in Isaac Sim

NVIDIA provides high-quality models for robots like Unitree H1, Boston Dynamics Atlas, and their own reference humanoid designs. These models come with pre-configured physics properties, including mass, inertia, and friction.

---

## 7.2 Actuators and Control

In Isaac Sim, you control a humanoid by applying:
- **Position Targets**: "Move the knee to 45 degrees."
- **Velocity Targets**: "Rotate the hip at 1 rad/s."
- **Torques**: Directly applying force to the joints.

You must also tune the **Stiffness** and **Damping** of the joints to ensure stable movement.

---

## 7.3 Isaac Lab (formerly Orbit)

Isaac Lab is a unified framework for robot learning. It provides:
- **Environments**: Ready-to-use scenes like warehouses or uneven terrain.
- **Task Definitions**: Rewards and observations for Reinforcement Learning.
- **Sensors**: Easy integration of cameras, contact sensors, and IMUs.

---

## 7.4 Example: Standing Up

A classic first task for a humanoid is to learn how to stand. This requires:
1. **Observation**: The robot's orientation (from IMU) and joint positions.
2. **Action**: Torques applied to the legs and torso.
3. **Reward**: Higher points for keeping the head high and the torso upright.

---

## Assessment: Week 7 Lab

**Goal**: Explore a Humanoid model in Isaac Sim.

1. Open Isaac Sim and load the "Unitree H1" or "Ant" example.
2. Use the "Joint Drive" panel to manually move the robot's limbs.
3. Observe how the robot reacts to gravity. Does it fall over? Why?
4. Write a short script using the Python API to print the robot's world position every second.

---

## Challenge

What are the three most important sensor inputs a humanoid needs to maintain its balance?
