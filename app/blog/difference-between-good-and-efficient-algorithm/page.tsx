import React from 'react'

const page = () => {
  return (
    <>
    <h1>The Difference Between a good and an efficient Algorithm</h1>

    <h3>
        <i> 16 Dec 2018 </i>
    </h3>

    <p>
        Few days back, I was participating in the Codeforces round 526.
        I came across
        <a href="https://codeforces.com/contest/1084/problem/C">this</a>
        question which i find really beautiful. <br />
        <br />
        The problem statement is written just to confuse the readers but
        after reading it few times, we can decipher that the question is
        just to find the sum of multiplication of all combination of
        elements in an array. Still find it confusing, let's take an
        example. <br />
        <br />
        Suppose we start with
    </p>

    <blockquote>String = "aaababbbbbaa".</blockquote>

    <p>
        We can count the number of all of the a's with making a
        partition at every b. Hence we get an
    </p>

    <blockquote>array = [2,1,3] .</blockquote>

    <p>
        Now we need to take all the combination of array elements. In
        the above array the combinations will be
    </p>
    <blockquote>
        ans = 2 + 1 + 3 + (2 * 1) + (2 * 3) + (1 * 3) + (2 * 1 * 3) =
        23.
    </blockquote>

    <p>
        There's a lot of ways to do this. We can use recursion to make a
        tree with brute force. You can find an algorithm of this here .
        Also we can use Dynamic programming to make it a bit faster.
        Here's the algorithm.
        <br />
        <br />
        But there's an even faster way to implement this algorithm.
    </p>
    <blockquote>
        We can increment all elements by 1 and multiply them all
        together, we get the exact same result + 1.
    </blockquote>

    <p>
        For instance, in the above example, array after incrementation
        will be [3,2,4]. Multiplying them all together, we get
        24.Subtracting 1, we get 23. Now the question arises, why does
        this work?
        <br />
        <br />
        You can think that from the first block a1(tha is 2 in the given
        example), you can either pick one of the a's or no a at all.
        there will be a1+1 ways to pick the elements. Similarly, we can
        pick the elements from all the blocks. Hence we get the answer
        equals to (a1+1)*(a2+1).....(an+1).
        <br />
        <br />
        There were a lot of ways to get the same result.The fastest
        algorithm will have the worst case complexity of O(n). Thus,even
        if our algorithm works fine, does not mean that it is the most
        efficient.
        <br />
        <br />
        Mail me at prakhar897@gmail.com if you have any queries.
    </p>

    <div className="ml-embedded" data-form="2hzNuN"></div>
</>
  )
}

export default page
