# Chapter 4: Robot Modeling and Simulation (URDF & Gazebo)

Before we can build a physical robot, we must model it and test it in simulation. This week focuses on URDF and the Gazebo simulator.

## Learning Outcomes

By the end of this chapter, you will be able to:
- Write a URDF (Unified Robot Description Format) file for a simple robot.
- Define Links, Joints, and Transmission elements.
- Launch a robot model in the Gazebo Ignition/Classic simulator.
- Use `joint_state_publisher` to move robot joints manually.

---

## 4.1 What is URDF?

URDF is an XML-based format used in ROS to describe all elements of a robot.

### Core Elements:
- **Links**: The rigid bodies (parts) of the robot. They have `visual` (what it looks like), `collision` (for physics), and `inertial` (mass and momentum) properties.
- **Joints**: The connections between links. Types include `revolute` (rotational), `prismatic` (sliding), and `fixed`.
- **Sensors**: Attached to specific links.

---

## 4.2 Building a Humanoid URDF

A humanoid model typically follows a tree structure:
- **Base Link**: Usually the torso or pelvis.
- **Hierarchical Joints**: Pelvis -> Hip -> Knee -> Ankle -> Foot.

### Example Snippet (Joint):
```xml
<joint name="knee_joint" type="revolute">
  <parent link="thigh"/>
  <child link="shin"/>
  <origin xyz="0 0 -0.4" rpy="0 0 0"/>
  <axis xyz="0 1 0"/>
  <limit effort="100" velocity="1.0" lower="-1.57" upper="0"/>
</joint>
```

---

## 4.3 Simulation with Gazebo

Gazebo is a powerful physics engine that simulates gravity, friction, and sensor noise.

### Why Simulate?
- **Safety**: No risk of breaking expensive hardware.
- **Speed**: Run simulations faster than real-time.
- **Scale**: Test multiple robots simultaneously.

### Gazebo Plugins:
Plugins allow ROS 2 to "talk" to the simulation. For example, a `gazebo_ros_diff_drive` plugin makes a simulated robot move like a real one when it receives `cmd_vel` messages.

---

## 4.4 Visualizing Transformations (TF)

In robotics, we constantly need to know where things are relative to each other. "Where is the camera relative to the world?"
The **TF2** library in ROS 2 keeps track of these coordinate frames over time.

---

## Assessment: Week 4 Lab

**Goal**: Create a 2-DOF (Degree of Freedom) Robotic Arm.

1. Write a URDF file for an arm with two links and two revolute joints.
2. Add a `visual` tag with a simple cylinder shape for each link.
3. Launch this model in RViz using a `urdf_launch` package.
4. Use the "Joint State Publisher GUI" to move the arm.

---

## Discussion Question

Why is the `collision` geometry often simplified compared to the `visual` geometry in a URDF file?
