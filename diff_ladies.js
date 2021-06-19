exports.getLady = function() {
    
    const diffLadies = [
        {
            lady_id:1,
            image : "images/lady2.png",
            name : "Sandhya Jain", 
            heading:"I am a Handicraft Worker From Assam, India and my speciality is Woollen Craft and I make woollen sweaters , mats, child clothing and variety of other products.",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "9998374939",
            products:{
                img1: "p_img/p51.jpeg",
                img2: "p_img/p52.jpeg",
                img3: "p_img/p53.jpeg",
                img4: "p_img/p54.jpeg",
                img5: "p_img/p55.jpeg",
                img6: "p_img/p56.jpeg"
            }
        },

        {
            lady_id:2,
            image : "images/lady7.png",
            name : "Nidhi Garg", 
            heading:"I am from Ujjain, Madhya Pradesh and I like do craft work. Craft of any kind",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "7883749392",
            products:{
                img1: "p_img/p5.png",
                img2: "p_img/p7.png",
                img3: "p_img/p15.png",
                img4: "p_img/p23.png",
                img5: "p_img/p26.png",
                img6: "p_img/p34.png"
            }
        },

        {
            lady_id:2,
            image : "images/lady4.png",
            name : "Ruchi Aggarwal", 
            heading:"I am a CraftsPerson from Maharashtra, India and my speciality is Woollen Craft and Embroidery. I make wall hangings,  pullovers and many more items.",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "7883749392",
            products:{
                img1: "p_img/p16.png",
                img2: "p_img/p8.png",
                img3: "p_img/p17.png",
                img4: "p_img/p24.png",
                img5: "p_img/p27.png",
                img6: "p_img/p30.png"
            }
        },

        {
            lady_id:2,
            image : "images/lady1.png",
            name : "Bindu Anand", 
            heading:"I am a Handicraft worker from Uttar Pradesh, India and my area is Wooden Craft and Clay Work. I make wooden candle stand, dolls and clay stands too.",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "7883749392",
            products:{
                img1: "p_img/p36.png",
                img2: "p_img/p9.png",
                img3: "p_img/p18.png",
                img4: "p_img/p31.png",
                img5: "p_img/p35.png",
                img6: "p_img/p43.png"
            }
        },

        {
            lady_id:2,
            image : "images/lady5.png",
            name : "Seema Kumari", 
            heading:"My home is near Banaras. I make small wooden figurines and things out of wool.",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "7883749392",
            products:{
                img1: "p_img/p1.jpg",
                img2: "p_img/p10.png",
                img3: "p_img/p19.png",
                img4: "p_img/p32.png",
                img5: "p_img/p37.png",
                img6: "p_img/p42.png"
            }
        },

        {
            lady_id:2,
            image : "images/lady6.png",
            name : "Sona Rani", 
            heading:"I am from small area near Jaipur, Rajasthan. I love making clay pots and stitching to creat various crafts.",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "7883749392",
            products:{
                img1: "p_img/p2.jpeg",
                img2: "p_img/p12.png",
                img3: "p_img/p20.png",
                img4: "p_img/p28.png",
                img5: "p_img/p38.png",
                img6: "p_img/p40.png"
            }
        },

        {
            lady_id:2,
            image : "images/lady3.png",
            name : "Sunita Kumari", 
            heading:"I am a Ceramicist and CraftsPerson from Rajasthan, India. I make crockery and bamboo items along with cloth printing and Jute work.",
            para1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fuga reprehenderit, quidem blanditiis labore rem? Praesentium corporis, numquam ipsa, laboriosam, dolor minus illo ea et unde eius assumenda culpa! Placeat voluptas rerum id magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus?",
            para2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rerum officiis ad iste praesentium, odit, obcaecati molestiae commodi, eaque asperiores tempora. Dolorem velit iste atque in modi vel iure tenetur?",
            phone: "7883749392",
            products:{
                img1: "p_img/p3.jpg",
                img2: "p_img/p11.png",
                img3: "p_img/p21.png",
                img4: "p_img/p44.png",
                img5: "p_img/p36.png",
                img6: "p_img/p29.png"
            }
        }


    ];

    return diffLadies;
}