import OpenAI from "openai";

export default async function QuestionGenerator(content: string){
    const client = new OpenAI({
        apiKey: import.meta.env.VITE_API_KEY,
        dangerouslyAllowBrowser: true
    })
    
    const questions = await client.chat.completions.create({
        messages: [{
            role: "user",
            content: `あなたは研究発表を聞いている聴衆です。あなたには研究内容についていくつか質問をする権利があります。その際、あなたが質問する内容を述べてください。なお、研究内容としてスライドの文字データをOCRしたものを提供します.${content}`
        }],
        model: "gpt-4o-mini"
    })
    return questions.choices[0]
}