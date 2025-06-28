---
title: "CQRS System Design: A Practical Approach"
description: "Lessons learned from implementing Command Query Responsibility Segregation in a large-scale enterprise application"
date: 2018-09-14
category: Architecture
author: Mark Ewer
tags: ['cqrs', 'architecture', 'microservices', 'event-sourcing', 'scalability']
image: /assets/images/cqrs-system-design.jpg
---

# CQRS System Design: A Practical Approach

<Breadcrumbs />

![CQRS System Design Hero](/assets/images/cqrs-system-design.jpg)

I recently had the opportunity to design and implement a CQRS (Command Query Responsibility Segregation) system for a large-scale enterprise application. The experience provided valuable insights into the practical aspects of implementing this architectural pattern, beyond the theoretical benefits often discussed in technical literature.

![CQRS System Design Overview](/assets/images/Slide1.png)

## The Challenge

Our team faced a system that needed to handle:
- High-volume transaction processing (10,000+ commands/second)
- Complex real-time reporting requirements
- Multiple read models for different user types
- Strict audit and compliance requirements
- 99.9% uptime requirements

The traditional CRUD approach was becoming a bottleneck, with read and write operations competing for resources and complex queries impacting transaction performance.

## Architecture Overview

Here is the core architecture diagram showing all the major components in the software:

![CQRS Architecture Diagram](/assets/images/Slide2.png)

Our CQRS implementation consisted of several key components working together to separate command and query responsibilities while maintaining data consistency through event sourcing.

### Technology Stack

![CQRS Technology Stack](/assets/images/Slide3.png)

Each component in our architecture was implemented using specific technologies chosen for their strengths in handling either command processing or query optimization.

## The Challenge

Our team faced a system that needed to handle:
- High-volume transaction processing (10,000+ commands/second)
- Complex real-time reporting requirements
- Multiple read models for different user types
- Strict audit and compliance requirements
- 99.9% uptime requirements

The traditional CRUD approach was becoming a bottleneck, with read and write operations competing for resources and complex queries impacting transaction performance.

## Why CQRS?

CQRS offered several advantages for our use case:

### Separation of Concerns
- **Commands**: Focus on business logic and validation
- **Queries**: Optimized for specific read scenarios
- **Clear boundaries**: Between what changes state and what reads state

### Performance Optimization
- Independent scaling of read and write sides
- Specialized data models for different query patterns
- Elimination of complex joins in read operations

### Flexibility
- Multiple read models from the same write model
- Different technologies for read and write sides
- Support for diverse client requirements

## Architecture Overview

Our CQRS implementation consisted of several key components:

```
┌─────────────┐     ┌─────────────┐    ┌─────────────┐
│   Commands  │───▶│ Write Model │───▶│   Events    │
└─────────────┘     └─────────────┘    └─────────────┘
                                              │
                                              ▼
┌─────────────┐     ┌─────────────┐    ┌─────────────┐
│   Queries   │◀───│ Read Models │◀───│Event Handler│
└─────────────┘     └─────────────┘    └─────────────┘
```

### Command Side
- **Command Handlers**: Process business commands
- **Aggregates**: Encapsulate business logic and invariants
- **Event Store**: Persist domain events
- **Command Bus**: Route commands to appropriate handlers

### Query Side
- **Projection Handlers**: Build read models from events
- **Read Models**: Optimized data structures for queries
- **Query Handlers**: Process read requests
- **Query Bus**: Route queries to appropriate handlers

## Implementation Details

### REST API Design

![REST API Implementation](/assets/images/Slide5.png)

Here is an example of one of the REST APIs. For this, I used the NancyFX framework to create REST/JSON endpoints for commands and queries. Note how the API endpoint is only responsible for DTO deserialization and the work is delegated to the Command Bus.

### Command Processing

![Command Bus Architecture](/assets/images/Slide6.png)

The command bus invokes the appropriate command handler for this particular action, maintaining clear separation of concerns and enabling easy testing and maintainability.

### Domain Model Implementation

![Aggregate Root Pattern](/assets/images/Slide7.png)

Handlers will then find and call methods on the affected Aggregate Root domain objects. All domain objects are Event Sourced, so they use the Emit/Apply pattern internally to track all state changes.

### Event Storage

![Event Store Implementation](/assets/images/Slide8.png)

All the events are stored in SQL Server as binary serialized objects. This makes it quick to save changes and simple to restore domain entities by "playing back" the events for that entity in order.

### Event Processing

![Event Bus Architecture](/assets/images/Slide9.png)

After the event is applied to the entity, it is routed to the Event Bus. The Event Bus uses a concept of a View Locator to find and relay the event to all of the event handlers that are affected by this event.

### View Generation

![Event Handler Implementation](/assets/images/Slide10.png)

The event handler creates an event-sourced view. Each view represents one ViewModel used by the client application, optimized for specific query patterns.

### View Management

![View Manager Implementation](/assets/images/Slide11.png)

The views are managed by View Manager classes. In this case, we used the Microsoft SQL Server view manager to persist the view model content directly into SQL Server tables.

### Database Schema

![SQL Server Tables](/assets/images/Slide12.png)

Here is an example of one of the SQL Server tables showing how the read models are structured for optimal query performance.

### Query Implementation

![Query API Implementation](/assets/images/Slide13.png)

The REST API supports both commands and queries, of course. The Queries use a simple Micro ORM called PetaPoco to perform queries against the SQL Server tables created by the views. Since these tables are essentially read-only from this API, the methods in the Read API are very simple and fast.

### Event Design
One of the most critical decisions was event design. We learned that:

**Events should be business-focused**, not technical:
```csharp
// Good
public class OrderPlaced 
{
    public Guid OrderId { get; set; }
    public CustomerId CustomerId { get; set; }
    public decimal TotalAmount { get; set; }
    public DateTime PlacedAt { get; set; }
}

// Avoid
public class OrderUpdated 
{
    public Dictionary<string, object> Changes { get; set; }
}
```

**Versioning strategy is crucial** from day one:
```csharp
public class OrderPlacedV2 : OrderPlaced
{
    public PaymentMethod PaymentMethod { get; set; }
    public ShippingAddress ShippingAddress { get; set; }
}
```

### Eventual Consistency
Managing eventual consistency between command and query sides required careful consideration:

**Communication Strategy**
- Immediate feedback for command validation
- Clear user expectations about data freshness
- Graceful handling of temporary inconsistencies

**Monitoring and Alerting**
- Lag time between events and projections
- Failed projection rebuilds
- Event processing failures

### Technology Choices

**Command Side**
- .NET Core for command handlers and aggregates
- SQL Server for event store (with custom implementation)
- Azure Service Bus for reliable event delivery

**Query Side**
- Multiple read stores: SQL Server, MongoDB, Redis
- Different technologies based on query patterns
- Elasticsearch for full-text search scenarios

## Challenges and Solutions

### Debugging Complexity
**Challenge**: Distributed nature made debugging difficult
**Solution**: 
- Comprehensive correlation IDs across all operations
- Centralized logging with structured data
- Event sourcing provided natural audit trail

### Data Consistency
**Challenge**: Managing invariants across aggregates
**Solution**: 
- Saga pattern for cross-aggregate transactions
- Eventually consistent business rules where possible
- Clear boundaries around aggregate consistency

### Projection Management
**Challenge**: Keeping multiple read models in sync
**Solution**: 
- Idempotent projection handlers
- Replay capability for rebuilding projections
- Monitoring for projection lag

## Performance Results

The CQRS implementation delivered significant improvements:

- **Command throughput**: 5x increase in transaction processing
- **Query performance**: 10x improvement in report generation
- **Scalability**: Independent scaling of read/write operations
- **Availability**: Reduced impact of read-heavy operations on writes

## Lessons Learned

### Start Simple
Begin with a single read model and expand based on actual needs, not anticipated requirements.

### Event Versioning
Plan for event schema evolution from the beginning—retrofitting is much harder.

### Monitoring is Critical
Invest heavily in monitoring, alerting, and debugging tools—the distributed nature requires it.

### Team Education
Ensure the entire team understands CQRS concepts—it's a significant shift in thinking.

### Business Alignment
Work closely with business stakeholders to understand read patterns and optimize accordingly.

## When to Use CQRS

CQRS isn't a silver bullet. Consider it when you have:

- **Complex business domains** with different read/write patterns
- **Performance requirements** that can't be met with CRUD
- **Multiple client types** with different data needs
- **High-scale scenarios** requiring independent scaling
- **Strong audit requirements** where event sourcing adds value

## Conclusion

Implementing CQRS was challenging but ultimately rewarding. The pattern provided the scalability and flexibility our system needed, though it came with increased complexity that required careful management.

The key to success was gradual implementation, comprehensive monitoring, and continuous learning. CQRS isn't just an architectural pattern—it's a different way of thinking about system design that can unlock significant benefits when applied thoughtfully.

---

*Have you implemented CQRS in your projects? What challenges did you face, and how did you overcome them? I'd love to hear about your experiences.*

## Related Posts

- [SmartUI Architecture Pattern: When and How to Use It](/blog/smartui-architecture-pattern)
- [Agile Principle #11: Self-Organizing Teams](/blog/agile-principles-11)
- [Event Sourcing Best Practices](/blog/event-sourcing-best-practices)
