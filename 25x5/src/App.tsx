import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading';
import { Hourglass } from 'lucide-react';

export function Teste() {
    return (
        <>
            <Heading>
                    Olá mundo 
                    <button> <Hourglass /> </button>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate molestias iste repellat delectus impedit culpa ducimus dolores veritatis vel. Iusto,
                voluptatem aliquid earum exercitationem repudiandae laboriosam incidunt voluptates dolorum a?
            </p>
        </>
    );
}