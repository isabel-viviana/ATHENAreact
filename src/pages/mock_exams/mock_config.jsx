import "./mock_config.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Zorrito from "../../assets/images/Zorrito2D.png";
import { configureExam } from "../../api/exams";

const MockConfig = () => {
    const navigate = useNavigate();

    const [examType, setExamType] = useState("full");
    const [difficulty, setDifficulty] = useState("medium");

    const [subjects, setSubjects] = useState([
        { id: 1, name: "Matemáticas", selected: true },
        { id: 2, name: "Lectura Crítica", selected: true },
        { id: 3, name: "Sociales y Ciudadanas", selected: true },
        { id: 4, name: "Ciencias Naturales", selected: true },
        { id: 5, name: "Inglés", selected: true },
    ]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const toggleSubject = (id) => {
        setSubjects((current) =>
            current.map((subject) =>
                subject.id === id
                    ? {
                          ...subject,
                          selected: !subject.selected,
                      }
                    : subject
            )
        );
    };

    const handleStartExam = async () => {
        setError("");

        const selectedSubjects = subjects
            .filter((subject) => subject.selected)
            .map((subject) => subject.id);

        if (selectedSubjects.length === 0) {
            setError("Debes seleccionar al menos un área.");
            return;
        }

        setLoading(true);

        try {
            const response = await configureExam({
                exam_type: examType,
                difficulty: difficulty,
                subject_ids: selectedSubjects,
            });

            // Mostrar la respuesta real de Laravel
            console.log("RESPUESTA COMPLETA:", response);

            /*
             * Dependiendo de cómo esté construido configureExam(),
             * puede devolver:
             *
             * Axios response:
             * response.data
             *
             * o directamente:
             * response
             *
             * Por eso manejamos ambos casos.
             */
            const responseData = response?.data ?? response;

            console.log("DATOS DEL SIMULACRO:", responseData);

            /*
             * Laravel está devolviendo el ID dentro de:
             *
             * data.attempt.id
             *
             * En tu captura:
             *
             * data
             *   └── attempt
             *         └── id: 22
             *
             * También dejamos algunos posibles formatos
             * alternativos para que el frontend sea resistente.
             */
            const examId =
                responseData?.data?.attempt?.id ||
                responseData?.attempt?.id ||
                responseData?.data?.id ||
                responseData?.attempt_id ||
                responseData?.id;

            console.log("ID DEL INTENTO:", examId);

            if (!examId) {
                throw new Error(
                    "Laravel creó el simulacro, pero no encontramos el ID del intento."
                );
            }

            /*
             * El ID que necesitamos para continuar el examen
             * es el ID del attempt.
             *
             * Ejemplo:
             * /mock/exam?id=22
             */
            navigate(`/mock/exam?id=${examId}`);
        } catch (err) {
            console.error("ERROR AL CREAR SIMULACRO:", err);

            setError(
                err?.response?.data?.message ||
                    err?.message ||
                    "No se pudo iniciar el simulacro."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mock-config">
            <div className="main__content">

                {/* HEADER */}
                <section className="page-header">
                    <div className="page-header__info">
                        <h1>Configurar Simulacro</h1>

                        <p>
                            Personaliza tu prueba según lo que necesites
                            practicar hoy.
                        </p>
                    </div>
                </section>

                {/* CONFIG GRID */}
                <section className="config-grid">

                    {/* LEFT */}
                    <div className="config-card">

                        <div className="card-title">
                            <i className="fas fa-gear"></i>
                            <h3>Tipo de Prueba</h3>
                        </div>

                        {/* SIMULACRO COMPLETO */}
                        <label
                            className={`option ${
                                examType === "full"
                                    ? "option--active"
                                    : ""
                            }`}
                        >
                            <div className="option__top">

                                <div className="option__left">

                                    <input
                                        type="radio"
                                        name="examType"
                                        checked={examType === "full"}
                                        onChange={() =>
                                            setExamType("full")
                                        }
                                    />

                                    <div>
                                        <h4>
                                            Simulacro Completo ICFES
                                        </h4>

                                        <p>
                                            Todas las áreas, 4.5 horas
                                        </p>
                                    </div>

                                </div>

                                <span className="recommended">
                                    Recomendado
                                </span>

                            </div>
                        </label>

                        {/* POR ÁREA */}
                        <label
                            className={`option ${
                                examType === "practice"
                                    ? "option--active"
                                    : ""
                            }`}
                        >
                            <div className="option__left">

                                <input
                                    type="radio"
                                    name="examType"
                                    checked={examType === "practice"}
                                    onChange={() =>
                                        setExamType("practice")
                                    }
                                />

                                <div>
                                    <h4>
                                        Por Área Específica
                                    </h4>

                                    <p>
                                        Selecciona una o más áreas
                                    </p>
                                </div>

                            </div>
                        </label>

                        {/* MINI SIMULACRO */}
                        <label
                            className={`option ${
                                examType === "quick"
                                    ? "option--active"
                                    : ""
                            }`}
                        >
                            <div className="option__left">

                                <input
                                    type="radio"
                                    name="examType"
                                    checked={examType === "quick"}
                                    onChange={() =>
                                        setExamType("quick")
                                    }
                                />

                                <div>
                                    <h4>
                                        Mini Simulacro
                                    </h4>

                                    <p>
                                        Mitad de preguntas, 2 horas
                                    </p>
                                </div>

                            </div>
                        </label>

                        {/* EXTRA SETTINGS */}
                        <div className="extra-settings">

                            {/* DIFICULTAD */}
                            <div className="extra-item">

                                <span>
                                    Dificultad
                                </span>

                                <select
                                    value={difficulty}
                                    onChange={(e) =>
                                        setDifficulty(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="medium">
                                        Media
                                    </option>

                                    <option value="easy">
                                        Fácil
                                    </option>

                                    <option value="hard">
                                        Difícil
                                    </option>
                                </select>

                            </div>

                            {/* TIEMPO EXTRA */}
                            <div className="extra-item">

                                <span>
                                    Tiempo Extra
                                </span>

                                <select defaultValue="none">

                                    <option value="none">
                                        No
                                    </option>

                                    <option value="15">
                                        +15 min
                                    </option>

                                    <option value="30">
                                        +30 min
                                    </option>

                                </select>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="config-card">

                        <div className="card-title">

                            <i className="fas fa-file-lines"></i>

                            <h3>
                                Áreas a evaluar
                            </h3>

                        </div>

                        {/* SUBJECTS */}
                        <div className="subjects">

                            {subjects.map((subject) => (

                                <label
                                    className="subject"
                                    key={subject.id}
                                >

                                    <input
                                        type="checkbox"
                                        checked={subject.selected}
                                        onChange={() =>
                                            toggleSubject(
                                                subject.id
                                            )
                                        }
                                    />

                                    <span>
                                        {subject.name}
                                    </span>

                                </label>

                            ))}

                        </div>

                        {/* SUMMARY */}
                        <div className="summary-box">

                            <div className="summary-item">

                                <span>
                                    Áreas seleccionadas
                                </span>

                                <strong>
                                    {
                                        subjects.filter(
                                            (subject) =>
                                                subject.selected
                                        ).length
                                    }
                                </strong>

                            </div>

                            <div className="summary-item">

                                <span>
                                    Dificultad
                                </span>

                                <strong>
                                    {difficulty === "easy"
                                        ? "Fácil"
                                        : difficulty === "hard"
                                        ? "Difícil"
                                        : "Media"}
                                </strong>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ERROR */}
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                {/* ACTIONS */}
                <section className="actions">

                    <button
                        className="btn btn--secondary"
                        onClick={() =>
                            navigate("/dashboard")
                        }
                        disabled={loading}
                    >
                        Cancelar
                    </button>

                    <button
                        className="btn btn--primary"
                        onClick={handleStartExam}
                        disabled={loading}
                    >
                        {loading
                            ? "Creando simulacro..."
                            : "Iniciar Prueba"}

                        {!loading && (
                            <i className="fas fa-play"></i>
                        )}
                    </button>

                </section>

            </div>

            {/* ASSISTANT */}
            <div className="assistant-box">

                <div className="assistant-message">
                    ¡Sigue así! Estás haciendo un gran trabajo.
                </div>

                <div className="assistant-avatar">

                    <img
                        src={Zorrito}
                        alt="Zorrito"
                    />

                </div>

            </div>

        </section>
    );
};

export default MockConfig;