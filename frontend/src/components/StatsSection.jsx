import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StatsSection = () => {
    const [stats, setStats] = useState([
        {
            id: 1,
            value: 0,
            target: 50000,
            label: 'Happy Customers',
            icon: '👥',
            suffix: '+',
            description: 'Satisfied shoppers worldwide',
            color: '#ff6b6b'
        },
        {
            id: 2,
            value: 0,
            target: 150000,
            label: 'Products Sold',
            icon: '📦',
            suffix: '+',
            description: 'Electronics delivered globally',
            color: '#4ecdc4'
        },
        {
            id: 3,
            value: 0,
            target: 25,
            label: 'Countries Served',
            icon: '🌍',
            suffix: '+',
            description: 'International shipping reach',
            color: '#45b7d1'
        },
        {
            id: 4,
            value: 0,
            target: 98,
            label: 'Customer Satisfaction',
            icon: '⭐',
            suffix: '%',
            description: 'Average customer rating',
            color: '#f9ca24'
        }
    ]);

    const [isVisible, setIsVisible] = useState(false);

    // Counter animation
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('stats-section');
            if (section) {
                const rect = section.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

                if (isInViewport && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check if already in viewport on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    const animateCounters = () => {
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            setStats(prevStats =>
                prevStats.map(stat => ({
                    ...stat,
                    value: Math.floor(stat.target * progress)
                }))
            );

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    };

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    };

    return (
        <section
            id="stats-section"
            className="py-4 d-flex align-items-center justify-content-center ml-19"
            style={{
                background: 'transparent',
                minHeight: '50vh'
            }}
        >
            <Container>
                <div className="text-center mb-4">
                    <h4 className="fw-bold text-3xl mb-2" style={{ color: '#0f0c29' }}>
                        Our Success
                    </h4>
                    <p className="text-muted text-lg">
                        Trusted by customers worldwide
                    </p>
                </div>

                <Row className="g-3 justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <Row className="g-3">
                            {stats.map((stat) => (
                                <Col key={stat.id} xs={6} sm={3}>
                                    <div
                                        className="text-center p-3"
                                        style={{
                                            border: '1px solid #e9ecef',
                                            borderRadius: '10px',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: 'white'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#f53347';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#e9ecef';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div className="mb-2">
                                            <span style={{ fontSize: '1.5rem' }}>
                                                {stat.icon}
                                            </span>
                                        </div>

                                        <div className="mb-1">
                                            <h5
                                                className="fw-bold mb-0"
                                                style={{
                                                    fontSize: '1.8rem',
                                                    color: '#f53347'
                                                }}
                                            >
                                                {stat.suffix === '%'
                                                    ? stat.value
                                                    : formatNumber(stat.value)
                                                }
                                                <span className="fs-6">{stat.suffix}</span>
                                            </h5>
                                        </div>

                                        <p className="mb-0 small text-muted">
                                            {stat.label}
                                        </p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default StatsSection;
