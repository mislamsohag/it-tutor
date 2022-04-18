import React from 'react';

const Blogs = () => {
    return (
        <div className='px-20 md:px-20 py-2 mx-auto max-w-7xl bg-slate-50'>
            <div className='py-2'>
                <h3 className='py-2 text-3xl font-bold'>Authentication Authorization?</h3>
                <p> 1. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                    <br />
                    2. Authentication is the first step of a good identity and access management process.
                    <br />
                    3. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.
                </p>

            </div>
            <div className='py-2'>
                <h3 className='py-2 text-3xl font-bold'>What can i use firebase?</h3>
                <p>Join Firebase at Google I/O 2022 live from Shoreline Amphitheatre and online May 11-12. Get the most out of the digital experience: build your schedule, earn Google Developer profile badges, keep track of what you learned after the event, and more.</p>
            </div>

            <div className='py-2'>
                <h3 className='py-2 text-3xl font-bold '>Whithout Authentication other Works</h3>
                <p> Web browsers treat every element as a kind of box. brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element.  However, CSS has two different types of boxes-block and inline. A block element always starts on a new line, and fills up the horizontal space left and right on the web page. display-block, a line break happens after the element, so a block element doesn’t sit next to other elements. Inline-block It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.</p>
            </div>

        </div>

    );
};

export default Blogs;