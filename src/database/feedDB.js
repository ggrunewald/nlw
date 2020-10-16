const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

//Arquivo criado para alimentar o DB com duas instituições fictícias para caso necessite reinicializá-lo

Database.then(async db => {
    //inserir dados na tabela
    /*
    await saveOrphanage(
            db, {
            lat: "-30.0351052",
            lng: "-51.2086812",
            name: "SOS Casas de Acolhida",
            about: "A SOS é uma organização séria que faz um lindo trabalho de proteção a menores vítimas de violência na região de Porto Alegre e Canoas.",
            whatsapp: "00000-0000",
            description: "A SOS é uma organização séria que faz um lindo trabalho de proteção a menores vítimas de violência na região de Porto Alegre e Canoas.",
            images: [
                "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ],
            instructions: "Venha trazer alegria para crianças. Elas adoram receber visitas todos os dias!",
            opening_hours: "Horário de visitas das 8h às 18h",
            open_on_weekends: "1"
        });

    await saveOrphanage(
            db, {
            lat: "-30.0502215",
            lng: "-51.2008377",
            name: "Lar de São José",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "00000-0000",
            images: [
                "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas das 9h às 19h",
            open_on_weekends: "0"
        });
    //*/
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");

    console.log(selectedOrphanages);

    //deletar dados da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "0"'));
});