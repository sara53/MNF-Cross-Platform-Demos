import styles from '../../css/header.module.css'

export function FunHeader() {

    const myStyle = { backgroundColor: 'green', padding: "1rem" }
    var trackName = "FrontEnd Track"
    return (
        <header>
            <h1>Hello Front End i am a function component</h1>
            <p className={styles.info}>Sara Atef Test Class</p>
            <h4>{trackName}</h4>
            <p style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae sunt voluptate aspernatur iste mollitia aliquid possimus eius. Incidunt architecto cupiditate, maiores repudiandae a eaque tenetur expedita illo obcaecati et</p>
        </header >
    )
}
