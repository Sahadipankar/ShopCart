import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const TestimonialsSection = () => {
    // Helper to get 3 random testimonials
    function getRandomTestimonials(arr, n) {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Tech Enthusiast",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
            rating: 5,
            review: "Absolutely love shopping here! The electronics quality is outstanding and the delivery is super fast. Best prices I've found for premium tech.",
            location: "New York, NY",
            product: "Wireless Headphones"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Premium Member",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            rating: 5,
            review: "Best online electronics store I've ever used. Customer service is excellent and the return policy is very fair. Highly recommend!",
            location: "Los Angeles, CA",
            product: "Gaming Laptop"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Frequent Shopper",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            rating: 4,
            review: "Great variety of electronics and competitive prices. The website is easy to navigate and the tech specs are detailed and accurate.",
            location: "Chicago, IL",
            product: "Smart Watch"
        },
        {
            id: 4,
            name: "David Williams",
            role: "Professional Photographer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
            rating: 5,
            review: "Found exactly the camera equipment I needed! Product descriptions are accurate and photos show real quality. Professional service!",
            location: "Austin, TX",
            product: "Professional Camera"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "Happy Customer",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
            rating: 5,
            review: "Amazing experience from start to finish. Fast shipping, secure packaging, and excellent product quality. The electronics work perfectly!",
            location: "Seattle, WA",
            product: "Smartphone"
        },
        {
            id: 6,
            name: "James Anderson",
            role: "Loyal Customer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
            rating: 4,
            review: "Reliable service and great tech deals. I've been shopping here for electronics for over a year and never had any issues. Keep it up!",
            location: "Miami, FL",
            product: "Wireless Earbuds"
        }
    ];

    const TestimonialCard = ({ testimonial }) => (
        <Card
            className="h-100 border-0 shadow-sm overflow-hidden testimonial-card"
            style={{
                background: 'white',
                margin: '1rem',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#f53347';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#f0f0f0';
            }}
        >
            <Card.Body className="text-center p-4 position-relative d-flex flex-column align-items-center">
                {/* Quote icon */}
                <div
                    className="position-absolute top-0 end-0 p-3"
                    style={{
                        fontSize: '3rem',
                        color: '#f53347',
                        opacity: 0.1,
                        lineHeight: 1
                    }}
                >
                    "
                </div>

                <div className="mb-3">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle mx-auto d-block"
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            border: '3px solid #f53347'
                        }}
                    />
                </div>
                <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            style={{
                                color: i < testimonial.rating ? '#ffc107' : '#e9ecef',
                                fontSize: '1.2rem'
                            }}
                        >
                            ★
                        </span>
                    ))}
                </div>

                <blockquote className="mb-4">
                    <p
                        className="text-muted mb-0"
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            fontStyle: 'italic'
                        }}
                    >
                        "{testimonial.review}"
                    </p>
                </blockquote>

                <div className="mb-2">
                    <h6 className="fw-bold mb-1 text-2xl" style={{ color: '#0f0c29' }}>
                        {testimonial.name}
                    </h6>
                    <small className="text-muted d-block text-sm">
                        {testimonial.role} • {testimonial.location}
                    </small>
                </div>

                <div className="mt-3">
                    <span
                        className="badge px-3 py-2"
                        style={{
                            background: '#f53347',
                            color: 'white',
                            borderRadius: '15px',
                            fontSize: '0.85rem'
                        }}
                    >
                        ✓ Verified Purchase: {testimonial.product}
                    </span>
                </div>
            </Card.Body>
        </Card>
    );

    return (
        <section className="py-5 ml-19" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
            <Container>
                <div className="text-center mb-5">
                    <div className="d-inline-block px-4 py-2 rounded-pill mb-3" style={{ background: '#f53347', color: 'white' }}>
                        ⭐ Customer Reviews
                    </div>
                    <h2 className="fw-bold mb-3" style={{ color: '#0f0c29', fontSize: '2.5rem' }}>
                        What Our Customers Say
                    </h2>
                    <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
                        Real feedback from real customers who trust us with their electronics needs
                    </p>
                </div>

                <Row className="g-4 justify-content-center">
                    {getRandomTestimonials(testimonials, 3).map((testimonial) => (
                        <Col key={testimonial.id} lg={4} md={6}>
                            <TestimonialCard testimonial={testimonial} />
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <div
                        className="p-4 rounded-3 d-inline-block"
                        style={{
                            background: 'white',
                            border: '2px solid #f53347',
                            borderRadius: '20px'
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                            <div className="text-center">
                                <div className="h4 mb-0 fw-bold" style={{ color: '#f53347' }}>4.8★</div>
                                <small className="text-muted">Average Rating</small>
                            </div>
                            <div className="text-center">
                                <div className="h4 mb-0 fw-bold" style={{ color: '#f53347' }}>50,000+</div>
                                <small className="text-muted">Happy Customers</small>
                            </div>
                            <div className="text-center">
                                <div className="h4 mb-0 fw-bold" style={{ color: '#f53347' }}>98%</div>
                                <small className="text-muted">Satisfaction Rate</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button
                        className="btn btn-outline-primary px-4 py-2"
                        style={{
                            borderColor: '#f53347',
                            color: '#f53347',
                            borderRadius: '25px',
                            fontWeight: '600'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f53347';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#f53347';
                        }}
                    >
                        View All Reviews →
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialsSection;
