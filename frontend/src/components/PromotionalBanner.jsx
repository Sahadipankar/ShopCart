import React from 'react';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';

const PromotionalBanner = () => {
    const promotions = [
        {
            type: "sale",
            title: "🔥 MEGA ELECTRONICS SALE",
            message: "Up to 70% OFF on Premium Electronics! Limited time offer.",
            buttonText: "Shop Now",
            countdown: "Ends in 2 days!",
            link: "/products?category=electronics",
            gradient: "linear-gradient(135deg, rgba(245, 51, 71, 0.1) 0%, rgba(245, 51, 71, 0.3) 100%)" // Light theme red gradient
        },
        {
            type: "shipping",
            title: "🚚 FREE SHIPPING WORLDWIDE",
            message: "Free shipping on orders over $100. No code needed!",
            buttonText: "Start Shopping",
            countdown: "",
            link: "/products",
            gradient: "linear-gradient(135deg, rgba(48, 43, 99, 0.1) 0%, rgba(36, 36, 62, 0.2) 50%, rgba(15, 12, 41, 0.3) 100%)" // Light theme blue gradient
        },
        {
            type: "new",
            title: "✨ NEW TECH ARRIVALS",
            message: "Discover the latest innovations in electronics and gadgets.",
            buttonText: "Explore Now",
            countdown: "",
            link: "/products?sort=newest",
            gradient: "linear-gradient(135deg, rgba(245, 51, 71, 0.15) 0%, rgba(48, 43, 99, 0.25) 100%)" // Light theme red-blue gradient
        }
    ];

    const [currentPromo, setCurrentPromo] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPromo((prev) => (prev + 1) % promotions.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const promo = promotions[currentPromo];

    return (
        <div
            className="promotional-banner d-flex justify-content-center align-items-center"
            style={{
                background: promo.gradient,
                minHeight: '40vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="text-center py-4 rounded-4 shadow-lg" style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                            <Row className="align-items-center justify-content-center">
                                <Col lg={8} className="text-center mb-3 mb-lg-0">
                                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3">
                                        <h4 className="mb-0 fw-bold" style={{ fontSize: '2rem', color: '#f53347', letterSpacing: '1px' }}>
                                            {promo.title}
                                        </h4>
                                        <span className="fs-5" style={{ color: '#302b63' }}>{promo.message}</span>
                                        {promo.countdown && (
                                            <span className="badge px-3 py-2" style={{
                                                background: 'linear-gradient(90deg, #f53347, #302b63)',
                                                color: '#fff'
                                            }}>
                                                {promo.countdown}
                                            </span>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4} className="text-center">
                                    <Button
                                        size="lg"
                                        className="fw-bold px-4 py-2 border-0"
                                        style={{
                                            background: 'linear-gradient(90deg, #f53347 0%, #302b63 100%)',
                                            color: '#fff',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 15px rgba(245, 51, 71, 0.3)'
                                        }}
                                        onClick={() => window.location.href = promo.link}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 20px rgba(245, 51, 71, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 15px rgba(245, 51, 71, 0.3)';
                                        }}
                                    >
                                        {promo.buttonText} →
                                    </Button>
                                </Col>
                            </Row>
                            {/* Dots indicator */}
                            <div className="mt-4">
                                {promotions.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`indicator-dot ${index === currentPromo ? 'active' : ''}`}
                                        style={{
                                            display: 'inline-block',
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            backgroundColor: index === currentPromo ? '#f53347' : 'rgba(48, 43, 99, 0.3)',
                                            margin: '0 7px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            border: index === currentPromo ? '2px solid #302b63' : 'none'
                                        }}
                                        onClick={() => setCurrentPromo(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PromotionalBanner;
