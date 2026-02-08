# Chapter 3: Advanced ROS 2 & Communication

Building on the basics, this week we explore the advanced communication mechanisms and tools that make ROS 2 suitable for complex humanoid robots.

## Learning Outcomes

By the end of this chapter, you will be able to:
- Implement ROS 2 Actions for complex task execution.
- Use Parameters to configure nodes dynamically.
- Understand the Role of DDS (Data Distribution Service) in ROS 2.
- Use RViz 2 for data visualization.

---

## 3.1 ROS 2 Actions

While Topics are great for continuous data (like sensor readings) and Services are good for quick requests, **Actions** are designed for long-term goals.

### The Action Lifecycle:
1. **Goal**: The client sends a goal (e.g., "Walk 5 meters").
2. **Feedback**: The server provides periodic updates (e.g., "I have walked 2 meters").
3. **Result**: The server sends a final status (e.g., "Goal Reached" or "Aborted due to obstacle").

---

## 3.2 Dynamic Configuration with Parameters

Parameters allow you to change the behavior of a node without recompiling it. For example, you might have a `max_speed` parameter for your humanoid.

```bash
ros2 param list
ros2 param get /my_node max_speed
ros2 param set /my_node max_speed 1.5
```

---

## 3.3 Data Distribution Service (DDS)

ROS 2 is built on top of DDS, an industry standard for real-time, dependable, and scalable data exchange. DDS handles the discovery of nodes and the "Quality of Service" (QoS) settings.

### QoS Profiles:
- **Reliable**: Ensures every message is delivered (good for commands).
- **Best Effort**: Drops messages if the network is congested (good for high-frequency sensor data like video).

---

## 3.4 Visualization with RViz 2

RViz (ROS Visualization) is the most important tool for a robotics engineer. It allows you to "see" what the robot sees.

- **Robot Model**: Visualize the URDF (3D model) of your humanoid.
- **Point Clouds**: See data from LIDAR or Depth Cameras.
- **TF (Transformations)**: Visualize the coordinate frames (e.g., where is the Hand relative to the Head?).

---

## Assessment: Week 3 Task

**Goal**: Explore ROS 2 Parameters and RViz.

1. Launch a `turtlesim` node.
2. Use `ros2 param` to change the background color of the simulator.
3. Open `rviz2` and attempt to add a "TF" display (Note: you might need to run a robot state publisher for this to be meaningful).
4. Explain the difference between `Reliable` and `Best Effort` QoS in your own words.

---

## Lab Challenge

Design a ROS 2 Action definition for a humanoid robot that needs to "Pick up an object". What would the Goal, Feedback, and Result fields look like?