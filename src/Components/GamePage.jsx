import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFoundPage"
import "../Styles/GamePage.css"

export default function Game() {
    /* params */
    const { type } = useParams();

    /* game logic */

    const [timer, setTimer] = useState(300);

    /* data */

    const countOfBoxes = type === "easy" ? 12 : type === "normal" ? 36 : 64;

    let images = [
        {
            src: "../Pics/spinx.jpg",
            alt: "spinx 1"
        },
        {
            src: "../Pics/pyramids of giza.jpg",
            alt: "pyramids of giza 1"
        },
        {
            src: "../Pics/cairo tower.jpg",
            alt: "cairo tower 1"
        },
        {
            src: "../Pics/abu simbel temple.jpg",
            alt: "abu simbel temple 1"
        },
        {
            src: "../Pics/the nile.jpg",
            alt: "the nile 1"
        },
        {
            src: "../Pics/al azhar mosque.jpg",
            alt: "al azhar mosque 1"
        }
    ];
    if (countOfBoxes >= 36) images.push(
        {
            src: "../Pics/spinx2.jpg",
            alt: "spinx 2"
        },
        {
            src: "../Pics/pyramids of giza 2.jpg",
            alt: "pyramids of giza 2"
        },
        {
            src: "../Pics/cairo tower 2.jpg",
            alt: "cairo tower 2"
        },
        {
            src: "../Pics/abu simbel temple 2.jpg",
            alt: "abu simbel temple 2"
        },
        {
            src: "../Pics/the nile 2.jpg",
            alt: "the nile 2"
        },
        {
            src: "../Pics/al azhar mosque 2.jpg",
            alt: "al azhar mosque 2"
        },
        {
            src: "../Pics/alexandria library.jpg",
            alt: "alexandria library 1"
        },
        {
            src: "../Pics/alexandria library 2.jpg",
            alt: "alexandria library 2"
        },
        {
            src: "../Pics/qaitbay castle.jpg",
            alt: "qaitbay castle 1"
        },
        {
            src: "../Pics/qaitbay castle 2.jpg",
            alt: "qaitbay castle 2"
        },
        {
            src: "../Pics/mediterranean sea alexandria.jpg",
            alt: "mediterranean sea alexandria 1",
        },
        {
            src: "../Pics/stanley bridge.jpg",
            alt: "stanley bridge 1"
        }
    );
    if (countOfBoxes >= 64) images.push(
        {
            src: "../Pics/spinx 3.jpg",
            alt: "spinx 3"
        },
        {
            src: "../Pics/pyramids of giza 3.jpg",
            alt: "pyramids of giza 3"
        },
        {
            src: "../Pics/cairo tower 3.jpg",
            alt: "cairo tower 3"
        },
        {
            src: "../Pics/abu simbel temple 3.jpg",
            alt: "abu simbel temple 3"
        },
        {
            src: "../Pics/the nile 3.jpg",
            alt: "the nile 3"
        },
        {
            src: "../Pics/al azhar mosque 3.jpg",
            alt: "al azhar mosque 3"
        },
        {
            src: "../Pics/alexandria library 3.jpg",
            alt: "alexandria library 3"
        },
        {
            src: "../Pics/qaitbay castle 3.jpg",
            alt: "qaitbay castle 3"
        },
        {
            src: "../Pics/mediterranean sea alexandria 2.jpg",
            alt: "mediterranean sea 2"
        },
        {
            src: "../Pics/mediterranean sea  alexandria 3.jpg",
            alt: "mediterranean sea 3"
        },
        {
            src: "../Pics/stanley bridge 2.jpg",
            alt: "stanley bridge 2"
        },
        {
            src: "../Pics/karnak temple.jpg",
            alt: "karnak temple"
        },
        {
            src: "../Pics/karnak temple 2.jpg",
            alt: "karnak temple 2"
        },
        {
            src: "../Pics/karnak temple 3.jpg",
            alt: "karnak temple 3"
        },
    );
    console.log(images.length)

    images.forEach((e, i) => {
        images.push({
            src: e.src,
            alt: e.alt
        });
    }) /* this process it benefit we multiple data to be enough and logical*/

    /* helpful functions */
    function GetRandomIndex(Array) {
        const RandomIndex = Math.ceil(Math.random() * Array.length - 1);
        if (!Array[RandomIndex]) {
            setTimeout(() => {
                GetRandomIndex(Array)
            }, 0) // setTimOut used to solve maximum call stack exceeded
        }
        else {
            return RandomIndex
        }
    }

    function isOpenedBox(index) {
        let isOpenedBox = false;
        /* eslint-disable-next-line */
        openedBox.map(e => { if (e === index) isOpenedBox = true });
        return isOpenedBox;
    }

    function isLikeItemInOpenedBox(index) {
        let isLikeItemInOpenedBox = false;
        /* eslint-disable-next-line */
        openedBox.map(e => {
            if (generatePuzzle.current[e].src === generatePuzzle.current[index].src) {
                isLikeItemInOpenedBox = true
            }
        })
        return isLikeItemInOpenedBox;
        /* in the condition it compared by src not object ;
        because you compare by method or property but not object */
    }

    const generatePuzzle = useRef(images.map(
        e => {
            const RandomIndex = GetRandomIndex(images);
            const image = images[RandomIndex];
            const newImages = images.filter((_, i) => i !== RandomIndex);
            images = newImages;
            return image;
        }
    ));

    const [openedBox, setOpenedBox] = useState([]); /* this state contain a number of box and any
    image in this box if it number equal what box contain image will appear */


    // effects

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1);
        }, 1000);
    }, [timer])

    /* component */
    if (type === "easy" || type === "normal" || type === "hard") {
        return (
            <div className="gamePage">
                {
                    openedBox.length === generatePuzzle.current.length ?
                        <span>
                            you win!
                        </span> : timer >= 0 ? <span style={{
                            color: timer <= 20 ? "#F00" : "#000"
                        }}>
                            {
                                Math.floor(timer / 60)
                            }:
                            {
                                Math.floor(timer % 60) < 10 ? 0 : <></>
                                /* it idea if the number under 10 of number % 60 write 0 before it why ? 
                                because if in second 9s only don't see minutes:9 only but be minutes:09 */
                            }
                            {
                                Math.floor(timer % 60)
                            }
                        </span> : <span style={{
                            fontSize: "30px",
                            color:"#F00",
                        }}>
                            you lose!
                        </span>
                }
                <div className="PicsContainer" style={{
                    // grid
                    gridTemplateColumns: type === "easy" ? "repeat(4,1fr)" : type === "normal" ? "repeat(6,1fr)" : "repeat(8,1fr)",
                }}>
                    {Array.from({ length: countOfBoxes }, (_, i) =>
                        <div key={i} style={{
                            // sizes
                            width: `calc(80vw / ${type === "easy" ? 6 : type === "normal" ? 8 : 12})`,
                            height: `calc(80vh / ${type === "easy" ? 4 : type === "normal" ? 8 : 10})`,
                            // colors
                            background: type === "easy" ? "#6CB4EE" : type === "normal" ? "#7BA05B" : "#FE6F5E",
                        }} onClick={() => {
                            if (isLikeItemInOpenedBox(i) && !isOpenedBox(i)) // !isOpenedBox(i) added to disable cheating
                            {
                                setOpenedBox([...openedBox, i])
                            }
                            else {
                                if (openedBox.length % 2 === 0 && !isOpenedBox(i)) {
                                    setOpenedBox([...openedBox, i]);
                                }
                                else if (!isOpenedBox(i)) {
                                    const newItem = openedBox.filter((_, i) => i !== openedBox.length - 1);
                                    setOpenedBox([...newItem, i]);
                                }
                            }
                        }}>
                            <img src={generatePuzzle.current[i].src} alt={generatePuzzle.current[i].alt} loading="lazy" style={{
                                // display
                                display: isOpenedBox(i) ? "block" : "none",
                                maxWidth: "calc(100% - 5px)",
                                maxHeight: "calc(100% - 5px)",
                                backgroundSize: "contain",
                            }} />
                        </div>)
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <NotFound suggestionsText={"Oops! you selected wrong level for game. you often write URL wrong. select on of them levels"} suggestions={
                [
                    {
                        name: "Easy",
                        link: "/type/easy"
                    },
                    {
                        name: "Normal",
                        link: "/type/normal"
                    },
                    {
                        name: "Hard",
                        link: "/type/hard"
                    }
                ]
            } />
        );
    }
}
