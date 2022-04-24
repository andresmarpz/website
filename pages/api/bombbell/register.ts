// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type BombType =
    | 'CombatXP'
    | 'ProfessionXP'
    | 'ProfessionSpeed'
    | 'ItemBomb'
    | undefined;

interface Bomb {
    server: String;
    type: BombType;
    player: String;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { data } = req.body;
    const message = new String(data);
    let type: BombType = undefined;

    if (message.includes('Combat XP')) {
        type = 'CombatXP';
    } else if (message.includes('Profession Speed')) {
        type = 'ProfessionSpeed';
    } else if (message.includes('Profession XP')) {
        type = 'ProfessionXP';
    } else if (message.includes('Item')) {
        type = 'ItemBomb';
    }

    const bomb: Bomb = {
        server: getServer(message),
        type: type,
        player: getPlayer(message)
    };

    console.log(
        `{"content": "${bomb.player} has thrown a ${bomb.type} on ${bomb.server}"}`
    );
    await axios.post(
        'https://discord.com/api/webhooks/953704281977008128/pLr2-8J5AzE-JGijtOo8RfZVoGRDWuH_ICfhWLiiRHyy66EgBlWEprKbc7VVOCZ7z3gv',
        {
            content: `${bomb.player} has thrown a ${bomb.type} on ${bomb.server}`
        }
    );

    res.end();
}

const getServer = (message: String) => {
    const args = message.split(' ');
    return args.find((a) => a.startsWith('WC'))!;
};

const getPlayer = (message: String) => {
    const args = message.split(' ');
    return args[2];
};
