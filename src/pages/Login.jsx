import { useState } from 'react';
import './Login.css';

// simulacao de e-mails já cadastrados. ***implementar backend***
const registeredUsers = ['usuario@email.com', 'teste@clinica.com'];

function Login() {
    const [step, setStep] = useState(1); // 1: Email, 2: Senha, 3: Cadastro
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (registeredUsers.includes(email)) {
            setStep(2);
        } else {
            setStep(3);
        }
    };

    const handleBack = () => {
        setStep(1);
        setEmail(email);
    }

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <form onSubmit={handleEmailSubmit} className="login-form">
                        <h2>Acesse sua conta</h2>
                        <p>Informe seu e-mail para continuar.</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            required
                            className="login-input"
                        />
                        <button type="submit" className="login-button">Continuar</button>
                    </form>
                );
            case 2:
                return (
                    <form className="login-form">
                        <div className="form-header">
                            <button type="button" onClick={handleBack} className="back-button">←</button>
                            <h2>Olá novamente!</h2>
                        </div>
                        <p>Seu e-mail: <strong>{email}</strong></p>
                        <p>Agora, digite sua senha para acessar.</p>
                        <input
                            type="password"
                            placeholder="Sua senha"
                            required
                            className="login-input"
                        />
                        <button type="submit" className="login-button">Entrar</button>
                    </form>
                );
            case 3:
                return (
                    <form className="login-form">
                        <div className="form-header">
                            <button type="button" onClick={handleBack} className="back-button">←</button>
                            <h2>Crie sua conta</h2>
                        </div>
                        <p>Ótimo! Para criar sua conta, preencha os campos abaixo.</p>
                        <p>E-mail para cadastro: <strong>{email}</strong></p>
                        <input
                            type="text"
                            placeholder="Nome completo"
                            required
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Crie uma senha"
                            required
                            className="login-input"
                        />
                        <button type="submit" className="login-button">Cadastrar e Acessar</button>
                    </form>
                );
            default:
                return null;
        }
    };

    const Stepper = () => {
        // define qual etapa visual está ativa.
        // se for o passo 2 (senha) ou 3 (cadastro), a etapa visual é a mesma (a segunda).
        const isStep1Active = step === 1;
        const isStep2Active = step === 2 || step === 3;
        const isStep1Completed = step > 1; // a primeira etapa está completa se passamos dela

        return (
            <div className="stepper-container">
                <div className="step-wrapper">
                    <div className={`step-circle ${isStep1Completed ? 'completed' : ''} ${isStep1Active ? 'active' : ''}`}>
                        {isStep1Completed ? '✔' : '1'}
                    </div>
                </div>
                <div className={`step-line ${isStep1Completed ? 'completed' : ''}`}></div>
                <div className="step-wrapper">
                    <div className={`step-circle ${isStep2Active ? 'active' : ''}`}>
                        2
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="login-container">
            <div className="login-box">
                <Stepper />
                {renderStepContent()}
            </div>
        </div>
    );
} export default Login;