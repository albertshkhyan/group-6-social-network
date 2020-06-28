import React from 'react';

const Post = (props) => {
    return (
        <div className="Post">
            <div className="image-container">
                <img src="https://lh3.googleusercontent.com/proxy/F8kSdBVI8bbDzmPQjWdYRXB2HmnnRN5UCeA1h07eOdXUgy61rfwaMrzvpHa8SLzlDLMi_TbyRqyLBDIFH3Wb-PUha8JlVmVTT8n7hodxBgqfvh0Sc_TD0g" alt=""/>
            </div>
            {props.post}
        </div>
    )
}
export default Post;