# Biomni AI Agent Architecture Analysis Document

## Overview

Biomni is a general-purpose biomedical AI agent designed to autonomously execute a wide range of research tasks across diverse biomedical subfields. The system integrates large language model (LLM) reasoning with retrieval-augmented planning and code-based execution to enhance research productivity and generate testable hypotheses.

## Core Architecture Components

### 1. Agent Core (`biomni/agent/`)

#### A1 Agent (`a1.py`)
The main agent class that orchestrates the entire system:

- **Initialization**: Sets up data lake, tool registry, retriever, and LLM
- **Data Management**: Downloads and manages ~11GB biomedical data lake
- **Tool Integration**: Supports both built-in and custom tool registration
- **Execution Engine**: Uses LangGraph state management for execution workflow
- **Timeout Management**: 600-second default timeout for tool execution

#### ReAct Implementation (`react.py`) 
Alternative agent using the ReAct (Reasoning + Acting) pattern:

- **State Management**: Uses LangGraph StateGraph for workflow orchestration
- **Tool Execution**: Multiprocessing-based timeout wrapper for robust execution
- **Conditional Logic**: Dynamic decision-making between reasoning and action steps
- **Error Handling**: Comprehensive error recovery and timeout management

### 2. Tool System (`biomni/tool/`)

#### Tool Registry (`tool_registry.py`)
Centralized management of available tools:

- **Registration**: Validates and registers tools with unique IDs
- **Retrieval**: Efficient lookup by name or ID
- **Storage**: Pandas DataFrame for document-based retrieval
- **Persistence**: Pickle-based serialization for tool state

#### Specialized Tool Modules
Domain-specific tool collections organized by biomedical discipline:

- **Molecular Biology** (`molecular_biology.py`): 2,221 lines, 89KB
- **Pharmacology** (`pharmacology.py`): 1,961 lines, 77KB  
- **Immunology** (`immunology.py`): 1,969 lines, 79KB
- **Genetics** (`genetics.py`): 1,671 lines, 65KB
- **Genomics** (`genomics.py`): 1,514 lines, 61KB
- **Database** (`database.py`): 3,894 lines, 147KB
- **12+ additional specialized modules**

#### Support Tools (`support_tools.py`)
Core utilities including Python REPL execution and system operations.

### 3. Data Infrastructure (`biomni/env_desc.py`)

#### Data Lake (11GB biomedical datasets)
Comprehensive collection of curated biomedical data:

- **Genomics**: GTEx tissue expression, COSMIC cancer data, genetic variants
- **Pharmacology**: BindingDB, drug repurposing hub, ADMET properties
- **Protein Interactions**: Affinity capture, proximity labeling, two-hybrid
- **Disease Associations**: DisGeNET, OMIM, GWAS catalog
- **Single-cell Data**: CZI census, cell type markers, GDPx2 perturbation screens
- **80+ specialized datasets** with detailed descriptions

#### Software Library (200+ tools)
Extensive collection of computational tools:

**Python Packages:**
- **Core Bioinformatics**: biopython, scanpy, anndata, mudata, gget
- **Genomics**: pysam, pyfaidx, pyranges, pybedtools  
- **Structural Biology**: rdkit, pymol, openmm, deeppurpose
- **Machine Learning**: scikit-learn, umap-learn, harmony-pytorch
- **Data Science**: pandas, numpy, scipy, matplotlib, seaborn

**R Packages:**
- **Bioconductor**: DESeq2, clusterProfiler, edgeR, limma
- **Tidyverse**: ggplot2, dplyr, tidyr, readr
- **Specialized**: harmony, WGCNA

**CLI Tools:**
- **Sequence Analysis**: samtools, bowtie2, bwa, bedtools
- **Quality Control**: fastqc, trimmomatic
- **Phylogenetics**: mafft, FastTree, iqtree2
- **Molecular Docking**: vina, ADFR

### 4. Retrieval System (`biomni/model/`)

#### Tool Retriever (`retriever.py`)
Intelligent resource selection system:

- **Prompt-based Retrieval**: Uses LLM to select relevant tools for tasks
- **Multi-modal Selection**: Retrieves tools, data, and software libraries
- **Generous Selection**: Prioritizes inclusion over exclusion for comprehensive coverage
- **Response Parsing**: Robust extraction of selected resource indices

### 5. LLM Integration (`biomni/llm.py`)

Abstraction layer for multiple LLM providers:
- **Claude Integration**: Primary LLM with stop sequences for execution control
- **OpenAI Support**: Alternative LLM backend
- **Configurable Parameters**: Model selection and generation control

## Execution Workflow

### 1. Initialization Phase
```
User Query → A1 Agent → Data Lake Setup → Tool Registry → LLM Configuration
```

### 2. Planning Phase (Tool Retrieval)
```
Query Analysis → Resource Retrieval → Tool Selection → Environment Configuration
```

### 3. Execution Phase (LangGraph State Management)
```
Generate → Execute → Route → [Self-Critic] → End
```

### 4. Tool Execution Pattern
```
Tool Call → Timeout Wrapper → Multiprocess Execution → Result/Error Handling
```

## Key Design Patterns

### 1. Modular Architecture
- **Separation of Concerns**: Clear boundaries between agent logic, tools, and data
- **Extensibility**: Easy addition of new tools and datasets via API
- **Domain Specialization**: Tool modules organized by biomedical discipline

### 2. Retrieval-Augmented Generation (RAG)
- **Dynamic Tool Selection**: LLM-powered selection of relevant resources
- **Context-Aware Planning**: Tools and data selected based on query context
- **Comprehensive Coverage**: Generous selection strategy for thorough analysis

### 3. Robust Execution Management
- **Timeout Handling**: Multiprocessing-based timeouts prevent hanging
- **Error Recovery**: Graceful handling of tool failures
- **State Persistence**: LangGraph maintains execution state across steps

### 4. Extensible Tool System
- **Custom Tool Registration**: Users can add domain-specific tools
- **Schema Validation**: Consistent tool interface requirements
- **Dynamic Integration**: Runtime tool addition and removal

## Data Flow Architecture

```
User Query
    ↓
Query Analysis & Resource Retrieval
    ↓
Tool & Data Selection
    ↓
System Prompt Generation
    ↓
LangGraph Execution Engine
    ↓
    ├── Generate (LLM Planning)
    ├── Execute (Tool Execution)  
    ├── Route (Decision Logic)
    └── [Self-Critic] (Optional)
    ↓
Results & Error Handling
    ↓
Response Formatting
```

## Scalability Features

### 1. Computational Efficiency
- **Parallel Execution**: Multiprocessing for tool isolation
- **Lazy Loading**: On-demand data lake initialization
- **Caching**: Tool registry persistence and state management

### 2. Resource Management
- **Memory Optimization**: Efficient data structure usage
- **Storage Management**: 11GB data lake with intelligent access patterns
- **Network Efficiency**: Download optimization and caching

### 3. Extensibility Infrastructure
- **Plugin Architecture**: Easy tool and data integration
- **API Consistency**: Standardized interfaces across components
- **Version Management**: Tool registry with versioning support

## Security & Reliability

### 1. Execution Safety
- **Process Isolation**: Multiprocessing prevents system-wide failures
- **Timeout Protection**: Prevents resource exhaustion
- **Error Containment**: Graceful failure handling

### 2. Data Integrity
- **Validation Systems**: Tool and data schema validation
- **Checksum Verification**: Data integrity checks during download
- **Atomic Operations**: Consistent state management

## Integration Capabilities

### 1. External Systems
- **Web Search**: Google search integration for literature access
- **Database Access**: Direct connection to major biomedical databases
- **File System**: Native file operations and data processing

### 2. Programming Languages
- **Python**: Primary execution environment with extensive library support
- **R**: Subprocess execution for Bioconductor and statistical analysis
- **Command Line**: Shell command execution for specialized tools

## Future Architecture Considerations

### 1. Biomni-E2 Development
- **Community-Driven**: Collaborative tool and data curation
- **Enhanced Capabilities**: Expanded action space and reasoning
- **Performance Optimization**: Improved execution efficiency

### 2. Scalability Enhancements
- **Distributed Execution**: Multi-node processing capabilities
- **Cloud Integration**: Scalable compute and storage resources
- **Real-time Processing**: Streaming data analysis capabilities

## Summary

Biomni represents a sophisticated biomedical AI agent architecture that combines:

- **Comprehensive Tool Ecosystem**: 200+ computational tools across biomedical domains
- **Rich Data Infrastructure**: 11GB curated biomedical datasets
- **Intelligent Retrieval**: LLM-powered resource selection
- **Robust Execution**: Fault-tolerant, timeout-protected tool execution
- **Extensible Design**: Easy integration of custom tools and data
- **Multi-modal Integration**: Python, R, and CLI tool support

The architecture successfully balances comprehensiveness with usability, providing researchers with a powerful platform for autonomous biomedical research while maintaining reliability and extensibility for future development. 