# Chapter 8: Computer Vision for Robotics (Perception)

For a robot to be "Physical AI," it must see and understand its environment. This week covers the fundamentals of robotic perception.

## Learning Outcomes

By the end of this chapter, you will be able to:
- Understand the difference between 2D and 3D computer vision.
- Learn about Object Detection, Segmentation, and Pose Estimation.
- Use OpenCV and ROS 2 Image pipelines.
- Explore depth cameras (RGB-D) and LIDAR.

---

## 8.1 The Robotic Vision Pipeline

1. **Acquisition**: Capturing raw data from sensors.
2. **Pre-processing**: Filtering noise, adjusting brightness, or resizing images.
3. **Inference**: Running an AI model (like YOLO or Segment Anything) to identify objects.
4. **Post-processing**: Converting 2D pixels into 3D world coordinates.

---

## 8.2 Depth Sensing (RGB-D)

Unlike your phone camera, robots often use **Depth Cameras** (like Intel RealSense or Stereolabs ZED). These sensors provide an RGB image plus a "Depth Map" where each pixel represents the distance from the camera.

### Point Clouds:
A collection of millions of (X, Y, Z) points in space. Robots use point clouds to create 3D maps of their surroundings.

---

## 8.3 Object Detection and Tracking

In a humanoid robot, we need to know where the "Hand" should go to pick up a "Cup".
- **Bounding Boxes**: Identify where the cup is in the image.
- **Instance Segmentation**: Identify the exact pixels belonging to the cup.
- **6D Pose Estimation**: Identify the 3D position (X, Y, Z) and orientation (Roll, Pitch, Yaw) of the cup.

---

## 8.4 ROS 2 Image Transport

In ROS 2, images are sent as messages. Because images are large, we use `image_transport` to compress them (using JPEG or PNG) before sending them over a network, saving bandwidth.

---

## Assessment: Week 8 Quiz

1. What is the difference between Object Detection and Instance Segmentation?
2. Why is "Depth" information crucial for a robot's interaction with the world?
3. Name one hardware-accelerated ROS 2 package for vision and explain what it does.

---

## Lab Task

Using a tool like Teachable Machine (by Google) or a pre-trained YOLO model, create a simple system that detects a specific object (e.g., your phone or a specific toy). Describe the steps you took.
