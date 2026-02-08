# Chapter 11: Real-world Deployment & Sim-to-Real

Moving from a virtual environment to a physical humanoid is the hardest part of robotics. This week covers the challenges of "Sim-to-Real".

## Learning Outcomes

By the end of this chapter, you will be able to:
- Define "The Reality Gap".
- Learn techniques for successful Sim-to-Real transfer.
- Understand the hardware constraints of humanoid robots.
- Learn about edge computing for robotics (Jetson, Orin).

---

## 11.1 The Reality Gap

The Reality Gap refers to the differences between a simulation and the real world. No simulator is perfect:
- **Physics**: Friction, battery voltage drop, and motor lag are hard to model perfectly.
- **Vision**: Lighting in a lab is different from the simulation.
- **Sensors**: Real sensors have noise and occasional dropouts.

---

## 11.2 Bridging the Gap

Engineers use several techniques to overcome the reality gap:
1. **Domain Randomization**: Randomizing the physics and visuals in simulation so the robot learns to be "robust" to changes.
2. **System Identification**: Carefully measuring the real robot's properties and updating the simulation to match.
3. **Domain Adaptation**: Using AI to make real camera images look like simulation images (or vice versa).

---

## 11.3 Deploying to the Edge

Humanoid robots can't be tethered to a powerful desktop computer. They need onboard "Edge" computing.
- **NVIDIA Jetson / Orin**: Powerful GPUs designed for mobile robots.
- **Low Latency**: The control loop (balancing) must run at 100Hz to 1000Hz. This requires real-time optimization.

---

## 11.4 Battery and Thermal Management

Real humanoids get hot and run out of power quickly.
- **Power Budget**: Every watt used by the GPU is a watt not available for the motors.
- **Thermal Throttling**: If the CPU/GPU gets too hot, it slows down, which can cause the robot to lose its balance and fall.

---

## Assessment: Week 11 Task

**Goal**: Research Sim-to-Real success stories.

1. Find a paper or video about "Learning to Walk" by any robotics lab (e.g., ETH Zurich, UC Berkeley, or Oregon State).
2. What techniques did they use to move their code from simulation to the real robot?
3. List three physical factors that are difficult to simulate accurately.

---

## Reflection

Why is it better to train a robot in simulation for 1000 hours rather than training it in the real world for 1000 hours?
