import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>

    <Navbar />
    <h1>Big Mechas have a Software Failure Problem</h1>

<h6> <i> 01 Oct 2023 </i> </h6>

<p>
    <b> Disclaimer: This isn't twitter. I am in no way an expert on this topic. This is just what I've observed, it
        could be completely wrong.
    </b> <br /> <br />

    I've noticed that more and more colossal failures are happening due to software bugs. There's a certain pattern
    in these failures when you dig deeper.

</p>

<h2>Software owns problems of other domains</h2>


<p>
    The “Boeing 737 MAX” plane crashed 5 times with a total loss of 400+ people. The actual issue behind these
    crashes was a software bug.
</p>

<blockquote>In 2010, Airbus announced the A320 NEO, an updated version of their popular A320 model with a new,
    larger, and <b>more fuel-efficient</b> engine. This posed a significant challenge for Boeing, which sought to
    upgrade
    their single-aisle 737 to compete with Airbus. However, the 737's lower wing clearance presented an obstacle.
    <br /> <br />

    Boeing's innovative solution involved raising the engine on the wing to create the 737 MAX. This adjustment
    allowed for the installation of a larger engine, positioning it above the wing. While this modification enabled
    Boeing to compete, it inadvertently led to a critical issue. During high-thrust moments like takeoff, the
    aircraft's nose tended to pitch excessively upward, potentially causing a stall. <br /> <br />

    To address this, Boeing introduced the Maneuvering Characteristics Augmentation System (MCAS), a software that
    automatically adjusted the aircraft's pitch if it flew at too high an angle. However, Boeing did not emphasize
    the presence of the MCAS system, and many pilots received minimal training on it. <br /> <br />

    On October 29, 2018, Lion Air Flight 610 experienced a nosedive issue during takeoff. Despite the
    pilots' efforts to troubleshoot, the plane ultimately crashed into the Java Sea. In the Ethiopian Airlines
    crash, the pilots managed to disable the MCAS, but the malfunctioning sensors had already sealed their fate. <br /> <br />

    <a href="https://www.youtube.com/watch?v=H2tuKiiznsY" target="_blank">This video</a> contains a better visual
    explanation.
</blockquote>

<p>
    If you notice, all the problem statements are eventually burdened onto software: Plane pitching upward, have
    software correct it. Don't want to give training to pilots, make the whole system automated. These kind of hacks
    are what i put in my raspberry pi experiments, they shouldn't be added where people's lives are at stake. <br />
    <br />

    To be clear, this isn't an argument that we shouldn't make automated systems, but rather it's better to solve
    all we can using “Physics++” before moving to C++. For, the physics rules are much less likely to change than
    human implemented ones. As it's said, “the best code is no code”.
</p>

<h2> Mission Critical Software runs on Startup values </h2>

<p>
    Asking an aerodynamics engineer to make some changes is quite tedious. The process
    must restart from scratch and timelines are delayed.
</p>

<p>
    On the other hand, the landing locations of rovers change on a whim. Scientists and even software engineers
    themselves are guilty of this. Afterall, how much bad could happen due to changing a few values…..
</p>

<p>
    Apparently a lot.
</p>

<blockquote>The Hakuto-R lunar lander crashed due to a critical software issue. During its descent towards the lunar
    surface, the spacecraft passed over a steep crater, and its radar altimeter detected a sudden change in
    altitude. The software incorrectly interpreted this data as a sensor malfunction and began to ignore it.
    Consequently, the lander lost an accurate measurement of its distance to the lunar surface. <br /> <br />

    As a result, the lander believed the moon's surface to be approximately five kilometers higher than it actually
    was. The control software successfully set the spacecraft down at its perceived altitude, where it remained in a
    hovering state, waiting for the moon's surface to come closer. However, this led to the depletion of the
    lander's propellant, causing it to fall the actual five kilometers to the lunar surface at a speed of about 500
    kilometers per hour. <br /> <br />

    The issue wasn't detected during testing because the planned landing site changed after simulations had already
    been completed. As a result, the specific scenario that led to the crash was not considered in the testing
    process.

</blockquote>

<p>
    The software's purpose is to do the things it's told and the requirements can change. This is not a problem. <br /> <br />

    The actual issue lies in the fact that due to the startup-y nature attached to software, people believe that Hardware and
    Infrastructure takes years to iterate, while software takes days. The pizza eating, hoodie wearing, spinning
    apps in days kind of an image is pretty hard to detach yourself from. <br /> <br />

    The stakeholders (scientists, government officials, engineers) live in the real world where software developers
    are able to achieve a lot everyday. This image inadvertently affects the expectations of how long software tasks
    will take.

</p>



<h2> Software is expected to step up on other's failures</h2>

<blockquote>Chandrayaan-2's crash during its attempted lunar landing can be attributed to a sequence of events. The
    spacecraft's descent began with a rough braking phase, which involved maximum thrust to slow down. This phase
    went smoothly. However, trouble arose during the transition to the Fine braking phase, where a series of
    maneuvers were necessary for a controlled landing. <br /> <br />

    In the subsequent Camera Coast phase, the spacecraft maintained a specific attitude and reduced thrust while the
    camera provided visual data for navigation. It was during this phase that the engine generated excessive thrust
    due to valve actuation (basically valves opened a bit slowly). This caused the spacecraft to ascend
    unexpectedly, deviating from its planned trajectory. <br /> <br />

    To address the situation, the spacecraft needed to perform a corrective maneuver. However, it was restricted to
    a slow rotation rate of 10 degrees per second. This made it challenging to realign with the intended trajectory.
    The constraints on the corrections, combined with the unexpected deviation, led to a large discrepancy from the
    ideal descent path. <br /> <br />

    Ultimately, the spacecraft's attempts to correct its course were insufficient, and it crashed onto the lunar
    surface. The design of Chandrayaan-2's software, which assumed every step would succeed without considering
    contingencies, played a significant role in the outcome. <br /> <br />

    <a href="https://www.youtube.com/watch?v=2ngVl6iO94c" target="_blank">Explanation Video </a>
</blockquote>



<p>

    Although the problem started inside valves, they eventually functioned as intended. The thing is that till the
    moment they start functioning, the lander has roamed away from the decided dropzone. Hence, the final blame
    resides with Software. <br /> <br />

    Software is expected to step up to others failures. And that's how it should be. No excuses. But this leads to
    the final and most important point….


</p>

<h2>Software is not given as much importance as it should get </h2>

<p>
    When you think of building a spacecraft or any big machinery, what comes to mind? <br /> <br />

    <b>Is it the aeroengineers hauling huge pipes of machinery, mechanical engineers working on machines 1000x larger
    than them. </b> <br /> <br /> 

    OR... <br /> <br /> 

    <b>Software engineers working in the corner of an office.</b> <br /> <br /> 

    These depictions create a false image in the minds of leadership who spend a lot of care on building the mecha.
    <br /> <br />

    The gigantic hulls and engines and fuel tanks and complex electrical circuits are extremely
    important. But even more important are the brains of these organisms. For an organism can live for long without
    a body part, but will die in seconds without a brain.

</p>

<h2> Conclusion </h2>
<p>
    I think there is a genuine problem with the way current "Mecha" Softwares are built. This doesn't have any conclusions, my hope is to spark a discussion on this topic. 
</p>

<p>
    Thanks for Reading!!
</p>

<div className="ml-embedded" data-form="2hzNuN"></div>
    </>
  )
}

export default page
